import TypeIt from "typeit-react";

const TypingAnimation = ({ texts }) => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: texts,
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
