import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

export interface ICartItem {
  id: string;
  name: string;
  url: string;
}

export interface IShoppingCartItem {
  item: ICartItem;
  quantity: number;
}

interface ShoppingCartContextData {
  shoppingCart: IShoppingCartItem[];
  cartSize: number;
  itemsQuantity: number;
}

type ShoppingCartActionsContextData = React.Dispatch<ShoppingCartAction>;

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export const ShoppingCartActionsContext =
  createContext<ShoppingCartActionsContextData>(
    {} as ShoppingCartActionsContextData
  );

type ShoppingCartAction =
  | {
      type: "ADD_ITEM";
      payload: {
        item: ICartItem;
        quantity?: number;
      };
    }
  | {
      type: "DECREASE_ITEM";
      payload: {
        item: ICartItem;
      };
    }
  | {
      type: "CLEAR_CART";
    }
  | {
      type: "REMOVE_ITEM";
      payload: {
        item: ICartItem;
      };
    };

function shoppingCartReducer(
  state: IShoppingCartItem[],
  action: ShoppingCartAction
) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, quantity = 1 } = action.payload;
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );
      if (itemIndex >= 0) {
        return [
          ...state.slice(0, itemIndex),
          {
            ...state[itemIndex],
            quantity: state[itemIndex].quantity + quantity,
          },
          ...state.slice(itemIndex + 1),
        ];
      }
      return [...state, { item, quantity }];
    }

    case "DECREASE_ITEM": {
      const item = action.payload.item;
      const itemIndex = state.findIndex(
        (cartItem: any) => cartItem.item.id === item.id
      );
      if (itemIndex === -1) {
        return state;
      }
      const newState = [...state];
      newState[itemIndex].quantity -= 1;
      if (newState[itemIndex].quantity === 0) {
        newState.splice(itemIndex, 1);
      }
      return newState;
    }

    case "REMOVE_ITEM": {
      const item = action.payload.item;
      const itemIndex = state.findIndex(
        (cartItem: any) => cartItem.item.id === item.id
      );
      if (itemIndex === -1) {
        return state;
      }
      const newState = [...state];
      newState.splice(itemIndex, 1);
      return newState;
    }

    case "CLEAR_CART": {
      return [];
    }

    default: {
      throw new Error(`Unhandled shoppingCart action type: ${action}`);
    }
  }
}

const ShoppingCartProvider: React.FC = ({ children }) => {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  const data = {
    shoppingCart,
    cartSize: shoppingCart.reduce((a, b) => a + b.quantity, 0),
    itemsQuantity: shoppingCart.length,
  };

  return (
    <ShoppingCartActionsContext.Provider value={dispatch}>
      <ShoppingCartContext.Provider value={data}>
        {children}
      </ShoppingCartContext.Provider>
    </ShoppingCartActionsContext.Provider>
  );
};

const useShoppingCart = (): ShoppingCartContextData => {
  const context: ShoppingCartContextData = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

const useShoppingCartActions = (): ShoppingCartActionsContextData => {
  const context = useContext(ShoppingCartActionsContext);
  if (!context) {
    throw new Error("useShoppingCartActions must be used within");
  }
  return context;
};

// useShoppingCartActions return interface
interface IUseShoppingCartActions {
  addItem: (item: ICartItem, quantity?: number) => void;
  decreaseItem: (item: ICartItem) => void;
  removeItem: (item: ICartItem) => void;
  clearCart: () => void;
}

export { ShoppingCartProvider, useShoppingCart, useShoppingCartActions };
