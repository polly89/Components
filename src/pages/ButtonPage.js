import React from 'react';
import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!!')
    }
  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deals!</Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase/>
          Add to Cart!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Checkout!
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
