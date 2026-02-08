const ShapeBar = ({ x, y, width, height, fill }) => {
  const path = `
    M ${x}, ${y + height}
    Q ${x + width / 2}, ${y + height / 3} ${x + width / 2}, ${y}
    Q ${x + width / 2}, ${y + height / 3} ${x + width}, ${y + height}
    Z
  `;

  return <path d={path} fill={fill} />;
};

export default ShapeBar;
