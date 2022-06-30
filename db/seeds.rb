# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Seeding data...'
carrot = Crop.create({
    name: "Carrot",
    family: "Umbel",
    plants_per_sq_ft: 30,
    days_to_maturity: 54,
    projected_yield: 3.5,
    yield_unit: 'lbs',
    watering_needs: 'Deeply water every 3 days, allowing roots to stretch to reach water',
    details: 'Sow from early spring to midsummer, 3/4–1" apart, 1/4– 1/2" deep, in a 2"-wide band (about 30 seeds/ft.) Sprinkle the soil surface to keep moist. Do not allow soil to crust before the emergence of seedlings, which takes 1–3 weeks, depending on temperature and moisture. If necessary, thin young seedlings to 3/4–2" apart, depending on root size desired. Keep weed-free by tine weeding and shallow hoeing.',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg'
})

escarole = Crop.create({
    name: "Escarole",
    family: "Aster",
    plants_per_sq_ft: 4,
    days_to_maturity: 50,
    projected_yield: 4,
    yield_unit: 'pc',
    watering_needs: 'Overhead water enough to keep soil moist, especially during the summer. Refrain from overhead watering a few days before harvest after rubber banding to avoid rot while blanching',
    details: 'Sow seeds 6 seeds per foot, rows 12-18" apart. Cover seed lightly, about 1/8", and firm soil gently. Dry soil must be watered to ensure coolness and moisture, and for uniform germination. Thin the seedlings 8" apart as soon as they are large enough to handle.',
    image: 'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/escarole_commodity-page.png'
})

tomato = Crop.create({
    name: "Tomato",
    family: "Nightshade",
    plants_per_sq_ft: 1,
    days_to_maturity: 75,
    projected_yield: 10,
    yield_unit: 'lbs',
    watering_needs: "Early in the growing season, watering plants at the base of the plant daily in the morning. Avoid getting the leaves wet, as it can cause mold. As temperatures increase, you might need to water tomato plants twice a day. Garden tomatoes typically require 1-2 inches of water a week. Tomato plants grown in containers need more water than garden tomatoes.",
    details: "Don't start too early—leggy, root-bound, or flowering transplants can cause stunting and reduce early production. About 5–6 weeks before transplanting, sow 1/4in deep in 20-row flats with 20 seeds/row, or in 200-cell trays with 1 seed/cell; lightly cover. Keep mix at 75–85°F (24–29°C) with moderate moisture. At first true leaf, pot-up to 50-cell trays or 4in pots, depending on expected transplant timing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVV9pKUx9zn8n-5f-kjteMT7ECYH4_ydvAVw&usqp=CAU"
})

salad_radish = Crop.create({
    name: 'Salad Radish',
    family: 'Brassica',
    plants_per_sq_ft: 36,
    days_to_maturity: 21,
    projected_yield: 32,
    yield_unit: 'pc',
    watering_needs: 'Make sure they receive enough rainfall or deep watering. Drought stress can cause the roots to develop poor/spicy flavor and a tough texture. If the planting does not get one inch of rain each week, soak the soil thoroughly at least once a week. If your soil is sandy, it is important to water more often than once a week',
    details: "Sow at any time during the season, beginning in early spring. Use 2–3in wide bands, seeds about 3/4–1in apart (about 35 seeds/ft. except 10 seeds/ft. for 'Red Meat,' 'Nero Tondo,' and 'Green Luobo Improved'), 1/2in deep, rows 1' apart, or any row or bedding scheme that will eliminate unplanted ground to discourage weeds. For longer, straighter French Breakfast radishes, sow 15–20% more seeds per row than round radishes, 1/2 to 1 cm deeper, and do not irrigate unless absolutely necessary. Radishes are adversely affected by hot, dry weather. They remain in prime condition only a few days and should be grown rapidly with plenty of moisture to be mild, tender, and attractive",
    image: "https://www.thespruce.com/thmb/TWX9QO_HTDZSDmTvA0fasM1QEN0=/1202x1202/smart/filters:no_upscale()/French-Breakfast-Radish-57c957f85f9b5829f4aa495f.jpg"
})

cucumber = Crop.create({
    name: 'Cucumber',
    family: 'Curcubit',
    plants_per_sq_ft: 1,
    days_to_maturity: 52,
    projected_yield: 4,
    yield_unit: 'lbs',
    watering_needs: "The main care requirement for cucumbers is consistent watering. They need at least one inch of water at the base of the plant per week (or more, if temperatures are particularly high). Getting the leaves of the plant wet can cause downy mildew and mold. Inconsistent watering leads to bitter-tasting fruit.",
    details: "Sow indoors 1–2 seeds/cell, 3–4 weeks before transplanting. Keep temperature above 70°F (21°C) day and 60°F (16°C) night. Transplant 12in apart in rows 5–6' apart. Do not disturb roots when transplanting. If directly sowing into ground, wait until soil is warm, at least 70°F (21°C). Cucumber seeds will not germinate at a soil temperature below 50°F (10°C). Sow 2 seeds/ft., 1/2in deep, in rows 6' apart. Thin to 12in apart.",
    image: 'https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw17917b1b/images/products/vegetables/02989_01_socrates.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196'

})

katey = User.create({
    first_name: 'Katey',
    last_name: 'Van',
    plant_hardiness_zone: '5b',
    username: 'kvan',
    password: '12345',
    password_confirmation: '12345'
})

danny = User.create({
    first_name: 'Danny',
    last_name: 'Morals',
    plant_hardiness_zone: '7a',
    username: 'dmorals',
    password: '12345',
    password_confirmation: '12345'
})

katey_garden = Garden.create({
    rows: 10,
    columns: 10,
    user_id: katey.id
})

GardenSquare.create({
    square_number: 11,
    garden_id: katey_garden.id,
    crop_id: carrot.id
})

GardenSquare.create({
    square_number: 13,
    garden_id: katey_garden.id,
    crop_id: carrot.id
})

GardenSquare.create({
    square_number: 14,
    garden_id: katey_garden.id,
    crop_id: escarole.id
})

puts 'Seeded 🌱'
