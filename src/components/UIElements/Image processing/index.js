import React, { useState } from "react";

const ImageProcessing = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <form>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="uploaded image" />}
      </form>
    </div>
  );
};

export default ImageProcessing;
