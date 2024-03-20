import { Fragment, useContext, useEffect, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { UIContext } from "../../contexts/UI";

const ImgViews = ({ close, src }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <img className="mfp-img" src={src} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView = () => {
  const { imagePreview, hideImagePreview } = useContext(UIContext);
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    setImg(imagePreview.showImage);
    setImgValue(imagePreview.imageSrc);
  }, [imagePreview]);

  return (
    <Fragment>
      {img && <ImgViews close={() => hideImagePreview()} src={imgValue} />}
    </Fragment>
  );
};
export default ImageView;
