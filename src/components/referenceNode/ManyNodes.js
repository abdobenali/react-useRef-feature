import React, { useRef } from "react";

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

const ManyNodes = () => {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };
  return (
    <>
      <h2>Manipulating Many Node</h2>

      <nav>
        <button
          onClick={() => {
            scrollToId(0);
          }}
        >
          Tom
        </button>
        <button
          onClick={() => {
            scrollToId(4);
          }}
        >
          Maru
        </button>
        <button
          onClick={() => {
            scrollToId(8);
          }}
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
                console.log(map);
              }}
            >
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ManyNodes;
