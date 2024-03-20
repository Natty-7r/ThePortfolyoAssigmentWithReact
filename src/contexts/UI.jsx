import { createContext, useCallback, useReducer } from "react";

// Create Context
const UIContext = createContext();

// Type
const type = {
  IMAGE: "IMAGE",
  VIDOE: "VIDOE",
  NAV: "NAV",
  TOGGLE: "TOGGLE",
};
const { IMAGE, VIDOE, NAV, TOGGLE } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,

  imagePreview: {
    showImage: false,
    imageSrc: null,
  },
  videoPlayer: {
    playVidoe: false,
    videoSrc: null,
  },
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case IMAGE:
      return {
        ...state,
        imagePreview: payload,
      };
    case VIDOE:
      return {
        ...state,
        videoPlayer: payload,
      };
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };

    default:
      return state;
  }
};

// Watson State
const UIState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);

  const setVideoPlayer = useCallback((videoSrc) => {
    dispatch({
      type: VIDOE,
      payload: {
        playVidoe: true,
        videoSrc: videoSrc,
      },
    });
  }, []);
  const closeVidoePlayer = useCallback((videoSrc) => {
    dispatch({
      type: VIDOE,
      payload: {
        playVidoe: false,
        videoSrc: null,
      },
    });
  }, []);
  const setImagePreview = useCallback((imageSrc) => {
    dispatch({
      type: IMAGE,
      payload: {
        imageSrc: imageSrc,
        showImage: true,
      },
    });
  }, []);
  const hideImagePreview = useCallback(() => {
    dispatch({
      type: IMAGE,
      payload: {
        imageValue: null,
        showImage: false,
      },
    });
  }, []);

  const { imagePreview, videoPlayer, nav, toggle } = state;
  return (
    <UIContext.Provider
      value={{
        nav,
        toggle,
        imagePreview,
        videoPlayer,
        setImagePreview,
        hideImagePreview,
        setVideoPlayer,
        closeVidoePlayer,
        changeNav,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIState;
export { UIContext };
