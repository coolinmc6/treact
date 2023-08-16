import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/swipeable.css';

interface Item {
  id: number;
  name: string;
}

const SwipeableParent = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);

  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentItemIndex(Math.min(currentItemIndex + 1, items.length - 1));
    },
    onSwipedRight: () => {
      setCurrentItemIndex(Math.max(currentItemIndex - 1, 0));
    },
  });

  return (
    <div className="swipeable-container" {...handlers}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="swipeable-item"
          style={{ transform: `translate(${100 * (index - currentItemIndex)}%, ${-100 * (currentItemIndex)}%)` }}
        >
          <div className="item">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SwipeableParent;
