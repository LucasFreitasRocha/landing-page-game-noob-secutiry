
function Step({ title, text, srcImg, altImg }) {

  return (
    <>
      <h2>{title}</h2>
      <p> {text}</p>
      <img className="image" src={srcImg} alt={altImg} />
    </>
  );
}

export default Step