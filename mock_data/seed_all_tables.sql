INSERT INTO category (name, description, note)
VALUES (
        'Pottery',
        'Handcrafted ceramic and clay items',
        'Includes functional and decorative pieces'
    ),
    (
        'Jewelry',
        'Unique handmade jewelry pieces',
        'Made with precious and semi-precious materials'
    ),
    (
        'Textiles',
        'Woven and sewn fabric creations',
        'Includes clothing, blankets, and tapestries'
    ),
    (
        'Woodwork',
        'Carved and crafted wooden items',
        'Furniture and decorative pieces'
    ),
    (
        'Glasswork',
        'Blown and molded glass art',
        'Both functional and artistic pieces'
    ),
    (
        'Metalwork',
        'Forged and cast metal creations',
        'Sculptures, tools, and decorative items'
    ),
    (
        'Leather',
        'Hand-tooled leather goods',
        'Bags, belts, and accessories'
    ),
    (
        'Painting',
        'Original artwork and illustrations',
        'Various mediums and styles'
    ),
    (
        'Sculpture',
        'Three-dimensional art pieces',
        'Various materials and techniques'
    ),
    (
        'Paper Crafts',
        'Handmade paper goods and origami',
        'Cards, journals, and decorative items'
    );
-- ============================================
-- TABLE: artisans
-- ============================================
INSERT INTO artisan (name, description)
VALUES (
        'Photojam',
        'Master potter specializing in functional ceramics'
    ),
    ('Rhynoodle', 'Contemporary jewelry designer'),
    ('Izio', 'Traditional textile weaver'),
    (
        'Divape',
        'neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel'
    ),
    ('Photobean', 'Minimalist furniture designer'),
    (
        'Topicblab',
        'est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi'
    ),
    (
        'Fliptune',
        'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est'
    ),
    (
        'Zoomzone',
        'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper'
    ),
    ('Aibox', 'Glass blowing artist'),
    ('Miboo', 'Metal sculptor'),
    ('Pixoboo', 'Leather craftsperson'),
    ('Devify', 'Contemporary painter'),
    ('Ntags', 'Stone carver'),
    ('Kare', 'Fiber artist'),
    ('Quinu', 'Woodturner specialist'),
    ('Rhyloo', 'Mixed media artist'),
    ('Blognation', 'Printmaker'),
    ('Skynoodle', 'Ceramic sculptor'),
    ('LiveZ', 'Stained glass artist'),
    ('Edgeify', 'Blacksmith'),
    ('Skalith', 'Textile dyer'),
    ('Topicware', 'Portrait painter'),
    ('Janyx', 'Basket weaver');
-- ============================================
-- TABLE: products
-- ============================================
INSERT INTO product (name, price, artisan_id, category_id)
VALUES -- Pottery products
    ('Handthrown Coffee Mug', 28.99, 1, 1),
    ('Large Serving Bowl', 65.50, 1, 1),
    ('Decorative Vase', 42.00, 14, 1),
    ('Ceramic Planter Set', 55.00, 14, 1),
    -- Jewelry products
    ('Sterling Silver Necklace', 89.99, 2, 2),
    ('Gemstone Earrings', 45.00, 2, 2),
    ('Handwoven Bracelet', 32.50, 2, 2),
    ('Custom Ring', 125.00, 2, 2),
    -- Textile products
    ('Wool Throw Blanket', 145.00, 3, 3),
    ('Hand-dyed Scarf', 38.00, 17, 3),
    ('Woven Wall Hanging', 95.00, 3, 3),
    ('Cotton Tote Bag', 28.00, 14, 3),
    -- Woodwork products
    ('Oak Cutting Board', 68.00, 5, 4),
    ('Walnut Coffee Table', 450.00, 5, 4),
    ('Turned Wooden Bowl', 85.00, 15, 4),
    ('Hand-carved Spoon Set', 45.00, 15, 4),
    -- Glasswork products
    ('Blown Glass Vase', 120.00, 9, 5),
    ('Stained Glass Panel', 280.00, 15, 5),
    ('Glass Ornament Set', 65.00, 9, 5),
    ('Fused Glass Plate', 55.00, 9, 5),
    -- Metalwork products
    ('Forged Iron Hooks', 42.00, 10, 6),
    ('Copper Wind Chimes', 78.00, 16, 6),
    ('Bronze Sculpture', 350.00, 10, 6),
    ('Steel Garden Stakes', 35.00, 16, 6),
    -- Leather products
    ('Leather Messenger Bag', 185.00, 11, 7),
    ('Handtooled Belt', 68.00, 11, 7),
    ('Leather Wallet', 52.00, 11, 7),
    ('Leather Journal Cover', 75.00, 11, 7),
    -- Paintings
    ('Abstract Landscape', 425.00, 12, 8),
    ('Portrait Commission', 650.00, 18, 8),
    ('Watercolor Series', 280.00, 12, 8),
    ('Mixed Media Canvas', 320.00, 16, 8),
    -- Sculptures
    ('Stone Garden Sculpture', 580.00, 13, 9),
    ('Clay Figure', 165.00, 14, 9),
    ('Metal Abstract Piece', 445.00, 10, 9),
    ('Wooden Carved Figure', 225.00, 15, 9),
    -- Paper Crafts
    ('Handmade Journal', 35.00, 19, 10),
    ('Letterpress Cards Set', 28.00, 19, 10),
    ('Origami Art Piece', 55.00, 19, 10),
    ('Custom Invitation Suite', 125.00, 19, 10);
-- ============================================
-- TABLE: users
-- ============================================
INSERT INTO "user" (
        firstname,
        lastname,
        email,
        username,
        password,
        artisan_id
    )
VALUES (
        'Emma',
        'Johnson',
        'emma.johnson@email.com',
        'emmaj',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        1
    ),
    (
        'Michael',
        'Smith',
        'michael.smith@email.com',
        'msmith',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        2
    ),
    (
        'Sarah',
        'Williams',
        'sarah.williams@email.com',
        'swilliams',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        3
    ),
    (
        'David',
        'Brown',
        'david.brown@email.com',
        'dbrown',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        4
    ),
    (
        'Lisa',
        'Davis',
        'lisa.davis@email.com',
        'ldavis',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        5
    ),
    (
        'James',
        'Miller',
        'james.miller@email.com',
        'jmiller',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        6
    ),
    (
        'Maria',
        'Garcia',
        'maria.garcia@email.com',
        'mgarcia',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        7
    ),
    (
        'Robert',
        'Rodriguez',
        'robert.r@email.com',
        'rrodriguez',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        8
    ),
    (
        'Jennifer',
        'Martinez',
        'jennifer.m@email.com',
        'jmartinez',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        9
    ),
    (
        'William',
        'Anderson',
        'william.a@email.com',
        'wanderson',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        10
    ),
    (
        'Elizabeth',
        'Taylor',
        'elizabeth.t@email.com',
        'etaylor',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        11
    ),
    (
        'Daniel',
        'Thomas',
        'daniel.thomas@email.com',
        'dthomas',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        12
    ),
    (
        'Jessica',
        'Moore',
        'jessica.moore@email.com',
        'jmoore',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        13
    ),
    (
        'Christopher',
        'Jackson',
        'chris.jackson@email.com',
        'cjackson',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        14
    ),
    (
        'Ashley',
        'White',
        'ashley.white@email.com',
        'awhite',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        15
    ),
    (
        'Matthew',
        'Harris',
        'matthew.harris@email.com',
        'mharris',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        16
    ),
    (
        'Amanda',
        'Martin',
        'amanda.martin@email.com',
        'amartin',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        17
    ),
    (
        'Joshua',
        'Thompson',
        'joshua.t@email.com',
        'jthompson',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        18
    ),
    (
        'Melissa',
        'Lee',
        'melissa.lee@email.com',
        'mlee',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        19
    ),
    (
        'Andrew',
        'Walker',
        'andrew.walker@email.com',
        'awalker',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        1
    ),
    (
        'Olivia',
        'Hall',
        'olivia.hall@email.com',
        'ohall',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        2
    ),
    (
        'Ryan',
        'Allen',
        'ryan.allen@email.com',
        'rallen',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        3
    ),
    (
        'Sophia',
        'Young',
        'sophia.young@email.com',
        'syoung',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        4
    ),
    (
        'Brandon',
        'King',
        'brandon.king@email.com',
        'bking',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        5
    ),
    (
        'Hannah',
        'Wright',
        'hannah.wright@email.com',
        'hwright',
        '$2b$10$N9qo8uLOickga.s3vYKHBOPTl49sL4JxKWBhU0T6cJzBH8Y2B9j2K',
        6
    );
-- ============================================
-- TABLE: reviews
-- ============================================
INSERT INTO review (email, rating, description, product_id)
VALUES -- Reviews for Handthrown Coffee Mug (product_id: 1)
    (
        'customer1@email.com',
        5,
        'Beautiful craftsmanship! The mug feels great in hand and keeps my coffee warm.',
        1
    ),
    (
        'customer2@email.com',
        4,
        'Love the design, slightly larger than expected but still perfect.',
        1
    ),
    (
        'customer3@email.com',
        5,
        'Perfect weight and balance. This is my new favorite mug!',
        1
    ),
    -- Reviews for Large Serving Bowl (product_id: 2)
    (
        'customer4@email.com',
        5,
        'Stunning piece! Gets compliments every time I use it for serving.',
        2
    ),
    (
        'customer5@email.com',
        4,
        'Good quality, beautiful glaze work.',
        2
    ),
    (
        'melissa.lee@email.com',
        5,
        'Absolutely love this bowl. Perfect for family dinners!',
        2
    ),
    -- Reviews for Decorative Vase (product_id: 3)
    (
        'customer6@email.com',
        5,
        'Gorgeous vase, looks amazing with fresh flowers.',
        3
    ),
    (
        'ashley.white@email.com',
        4,
        'Very nice piece, adds elegance to my living room.',
        3
    ),
    -- Reviews for Sterling Silver Necklace (product_id: 5)
    (
        'customer7@email.com',
        5,
        'Absolutely gorgeous! Arrived beautifully packaged.',
        5
    ),
    (
        'customer8@email.com',
        5,
        'Better than the photos. Very happy with this purchase.',
        5
    ),
    (
        'customer9@email.com',
        4,
        'Beautiful piece, clasp is a bit delicate but overall great.',
        5
    ),
    (
        'olivia.hall@email.com',
        5,
        'I wear this every day! Such high quality silver.',
        5
    ),
    -- Reviews for Gemstone Earrings (product_id: 6)
    (
        'emma.johnson@email.com',
        5,
        'These earrings are stunning! Perfect for special occasions.',
        6
    ),
    (
        'customer10@email.com',
        4,
        'Beautiful stones, very well made.',
        6
    ),
    -- Reviews for Handwoven Bracelet (product_id: 7)
    (
        'customer11@email.com',
        5,
        'Unique design and comfortable to wear all day.',
        7
    ),
    (
        'sarah.williams@email.com',
        5,
        'Love the colors and craftsmanship!',
        7
    ),
    -- Reviews for Wool Throw Blanket (product_id: 9)
    (
        'customer12@email.com',
        5,
        'So soft and warm! Worth every penny.',
        9
    ),
    (
        'customer13@email.com',
        5,
        'The colors are even more beautiful in person. Love it!',
        9
    ),
    (
        'david.brown@email.com',
        4,
        'Great quality wool, keeps me cozy during winter.',
        9
    ),
    -- Reviews for Hand-dyed Scarf (product_id: 10)
    (
        'customer14@email.com',
        5,
        'The dye work is incredible, such vibrant colors!',
        10
    ),
    (
        'amanda.martin@email.com',
        5,
        'This scarf is a work of art. I get compliments every time I wear it.',
        10
    ),
    -- Reviews for Oak Cutting Board (product_id: 13)
    (
        'customer15@email.com',
        5,
        'Excellent quality wood, perfect finish. Highly recommend!',
        13
    ),
    (
        'customer16@email.com',
        4,
        'Beautiful board, exactly as described.',
        13
    ),
    (
        'customer17@email.com',
        5,
        'Heavy duty and gorgeous. Best cutting board I own.',
        13
    ),
    (
        'james.miller@email.com',
        5,
        'Professional grade quality. Great for my kitchen.',
        13
    ),
    -- Reviews for Walnut Coffee Table (product_id: 14)
    (
        'customer18@email.com',
        5,
        'This table is absolutely stunning! The craftsmanship is impeccable.',
        14
    ),
    (
        'matthew.harris@email.com',
        5,
        'Worth every dollar. A true heirloom piece.',
        14
    ),
    -- Reviews for Blown Glass Vase (product_id: 17)
    (
        'customer19@email.com',
        5,
        'A true work of art! The colors are mesmerizing.',
        17
    ),
    (
        'customer20@email.com',
        5,
        'Absolutely stunning, looks perfect in my living room.',
        17
    ),
    (
        'jennifer.m@email.com',
        5,
        'Museum quality glass work. I am in awe!',
        17
    ),
    -- Reviews for Stained Glass Panel (product_id: 18)
    (
        'customer21@email.com',
        5,
        'The light through this panel is magical.',
        18
    ),
    (
        'elizabeth.t@email.com',
        5,
        'Incredible artistry. Exactly what I was looking for.',
        18
    ),
    -- Reviews for Forged Iron Hooks (product_id: 21)
    (
        'customer22@email.com',
        5,
        'Sturdy and beautiful. Perfect for my mudroom.',
        21
    ),
    (
        'william.a@email.com',
        4,
        'Well made hooks, very functional.',
        21
    ),
    -- Reviews for Leather Messenger Bag (product_id: 25)
    (
        'customer23@email.com',
        5,
        'Amazing quality leather. This bag will last forever.',
        25
    ),
    (
        'customer24@email.com',
        4,
        'Great bag, fits my laptop perfectly. Leather smells wonderful.',
        25
    ),
    (
        'customer25@email.com',
        5,
        'Best bag I have ever owned. Worth the investment!',
        25
    ),
    (
        'joshua.t@email.com',
        5,
        'Professional and stylish. Gets compliments at work.',
        25
    ),
    -- Reviews for Handtooled Belt (product_id: 26)
    (
        'customer26@email.com',
        5,
        'The tooling on this belt is exquisite!',
        26
    ),
    (
        'ryan.allen@email.com',
        4,
        'Quality leather and unique design.',
        26
    ),
    -- Reviews for Abstract Landscape (product_id: 29)
    (
        'customer27@email.com',
        5,
        'The painting is breathtaking. Adds so much character to our home.',
        29
    ),
    (
        'customer28@email.com',
        5,
        'Incredible talent! We are thrilled with our purchase.',
        29
    ),
    (
        'sophia.young@email.com',
        5,
        'This piece speaks to me every time I look at it.',
        29
    ),
    -- Reviews for Portrait Commission (product_id: 30)
    (
        'customer29@email.com',
        5,
        'The artist captured my family perfectly. We will treasure this forever.',
        30
    ),
    (
        'brandon.king@email.com',
        5,
        'Outstanding work. Highly recommend for portrait commissions!',
        30
    ),
    -- Reviews for Stone Garden Sculpture (product_id: 33)
    (
        'customer30@email.com',
        5,
        'This sculpture is the centerpiece of my garden.',
        33
    ),
    (
        'hannah.wright@email.com',
        5,
        'Magnificent stonework. A true investment piece.',
        33
    ),
    -- Reviews for Handmade Journal (product_id: 37)
    (
        'customer31@email.com',
        5,
        'Beautiful paper quality, binding is strong. Perfect for journaling.',
        37
    ),
    (
        'customer32@email.com',
        4,
        'Lovely journal, paper is thick and smooth.',
        37
    ),
    (
        'customer33@email.com',
        5,
        'This journal inspired me to write every day. Absolutely love it!',
        37
    ),
    (
        'maria.garcia@email.com',
        5,
        'Best journal I have ever used. The craftsmanship is evident.',
        37
    ),
    -- Additional cross-product reviews
    (
        'customer34@email.com',
        5,
        'Fast shipping and beautiful packaging. Product exceeded expectations!',
        7
    ),
    (
        'customer35@email.com',
        4,
        'Good quality for the price.',
        11
    ),
    (
        'customer36@email.com',
        5,
        'This is a treasure! Will be ordering more.',
        19
    ),
    (
        'daniel.thomas@email.com',
        5,
        'Amazing craftsmanship. You can tell this was made with love.',
        31
    ),
    (
        'jessica.moore@email.com',
        4,
        'Very happy with this purchase. Would recommend to friends.',
        15
    ),
    (
        'customer37@email.com',
        5,
        'Perfect gift! The recipient was thrilled.',
        28
    );
-- ============================================
-- Database seeding complete!
-- ============================================
-- Total records inserted:
-- - 10 categories
-- - 20 artisans  
-- - 40 products
-- - 25 users
-- - 60 reviews
-- ============================================