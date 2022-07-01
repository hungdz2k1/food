// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Burger 01",
    price: 50000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "02",
    title: "Pizza 01",
    price: 115000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "03",
    title: "Pizza 02",
    price: 110000,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "04",
    title: "Pizza 03",
    price: 110000,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "05",
    title: "Burger 02",
    price: 24000,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },
  {
    id: "06",
    title: "Burger 03",
    price: 24000,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "07",
    title: "Pizza 04",
    price: 115000,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "08",
    title: "Pizza 05",
    price: 110000,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "09",
    title: "Pizza 06",
    price: 110000,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "10",
    title: "Hamburger 05",
    price: 24000,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "11",
    title: "Bánh mỳ 01 ",
    price: 35000,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "12",
    title: "Bánh mỳ 02 ",
    price: 35000,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },

  {
    id: "13",
    title: "Bánh mỳ 03",
    price: 35000,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Với Chicken McNuggets và các món gà rán thơm ngon khác của Mcdonald, chúng tôi chỉ sử dụng thịt gà ít béo, chứa nhiều protein, được kiểm định thường xuyên kỹ càng và lựa chọn gắt gao từ nguồn cung cấp an toàn, nhằm đảm bảo rằng, bạn sẽ luôn thưởng thức cùng một hương vị đậm đà, độc đáo tại bất cứ cửa hàng nào vào bất cứ thời điểm nào.",
  },
];

export default products;
