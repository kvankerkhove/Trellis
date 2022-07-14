# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Seeding data...'

fallow = Crop.create({
    name: "Fallow",
    family: "N/A",
    plants_per_sq_ft: 0,
    days_to_maturity: 0,
    projected_yield: 0,
    yield_unit: 'n/a',
    watering_needs: 'n/a',
    details: 'n/a',
    image: 'fallow.png'
})

carrot = Crop.create({
    name: "Carrot",
    family: "Umbel",
    plants_per_sq_ft: 30,
    days_to_maturity: 54,
    projected_yield: 3.5,
    yield_unit: 'lbs',
    watering_needs: 'Deeply water every 3 days, allowing roots to stretch to reach water',
    details: 'Sow from early spring to midsummer, 3/4–1" apart, 1/4– 1/2" deep, in a 2"-wide band (about 30 seeds/ft.) Sprinkle the soil surface to keep moist. Do not allow soil to crust before the emergence of seedlings, which takes 1–3 weeks, depending on temperature and moisture. If necessary, thin young seedlings to 3/4–2" apart, depending on root size desired. Keep weed-free by tine weeding and shallow hoeing.',
    image: 'carrot.png',
    url: 'https://images.unsplash.com/photo-1635774855751-09365b3071ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
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
    image: 'escarole.png',
    url: "https://www.johnnyseeds.com/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw86eee4de/images/products/vegetables/02614_01_natacha.jpg?sw=1120"
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
    image: "tomato.png",
    url: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
})

eggplant = Crop.create({
    name: "Eggplant",
    family: "Nightshade",
    plants_per_sq_ft: 1,
    days_to_maturity: 75,
    projected_yield: 10,
    yield_unit: 'lbs',
    watering_needs: "Early in the growing season, watering plants at the base of the plant daily in the morning. Avoid getting the leaves wet, as it can cause mold. As temperatures increase, you might need to water tomato plants twice a day. Garden tomatoes typically require 1-2 inches of water a week. Tomato plants grown in containers need more water than garden tomatoes.",
    details: "Don't start too early—leggy, root-bound, or flowering transplants can cause stunting and reduce early production. About 5–6 weeks before transplanting, sow 1/4in deep in 20-row flats with 20 seeds/row, or in 200-cell trays with 1 seed/cell; lightly cover. Keep mix at 75–85°F (24–29°C) with moderate moisture. At first true leaf, pot-up to 50-cell trays or 4in pots, depending on expected transplant timing",
    image: "eggplant.png",
    url: "https://images.unsplash.com/photo-1602293675566-39734b95e6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
})

salad_radish = Crop.create({
    name: 'Radish',
    family: 'Brassica',
    plants_per_sq_ft: 36,
    days_to_maturity: 21,
    projected_yield: 32,
    yield_unit: 'pc',
    watering_needs: 'Make sure they receive enough rainfall or deep watering. Drought stress can cause the roots to develop poor/spicy flavor and a tough texture. If the planting does not get one inch of rain each week, soak the soil thoroughly at least once a week. If your soil is sandy, it is important to water more often than once a week',
    details: "Sow at any time during the season, beginning in early spring. Use 2–3in wide bands, seeds about 3/4–1in apart (about 35 seeds/ft. except 10 seeds/ft. for 'Red Meat,' 'Nero Tondo,' and 'Green Luobo Improved'), 1/2in deep, rows 1' apart, or any row or bedding scheme that will eliminate unplanted ground to discourage weeds. For longer, straighter French Breakfast radishes, sow 15–20% more seeds per row than round radishes, 1/2 to 1 cm deeper, and do not irrigate unless absolutely necessary. Radishes are adversely affected by hot, dry weather. They remain in prime condition only a few days and should be grown rapidly with plenty of moisture to be mild, tender, and attractive",
    image: "radish.png",
    url: "https://images.unsplash.com/photo-1593026122758-19bebc625104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
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
    image: 'cucumber.png',
    url: "https://media.istockphoto.com/photos/cucumber-tree-with-plants-in-the-background-picture-id171555476?k=20&m=171555476&s=612x612&w=0&h=J2Y8phAgvgT4k0B9qor3MQsijhZM_a--RyCTIYaP-co="
})

kale = Crop.create({
    name: 'Kale',
    family: 'Brassica',
    plants_per_sq_ft: 1,
    days_to_maturity: 65,
    projected_yield: 6,
    yield_unit: 'lbs',
    watering_needs: "Kale likes a nice, even supply of water, about 1 to 1.5 inches per week. Mulch with compost, finely ground leaves, weed-free hay, straw, pine needles, or finely ground bark to keep the soil cool and moist and to keep down weeds.",
    details: "Plant from early spring to approximately 3 months before expected fall frost. For bunching: Sow 3–4 seeds every 12–18in, ½in deep, in rows 18–36in apart. Thin to 1 plant per group.",
    image: "kale.png",
    url: "https://media.istockphoto.com/photos/kale-picture-id849873134?k=20&m=849873134&s=612x612&w=0&h=cQXCxaoKsvSuEsHcSm0zpYHrj3PGtwGtpzb_SmK2HaU="
})

lettuce = Crop.create({
    name: 'Lettuce',
    family: "Aster",
    plants_per_sq_ft: 1,
    days_to_maturity: 50,
    projected_yield: 1,
    yield_unit: "pc",
    watering_needs: "A shallow-rooted plant, butterhead lettuce benefits from frequent, light waterings. Although water requirements depend on temperatures and soil, butterhead generally requires 1 to 2 inches per week.",
    details: "Seeds can germinate well in soils as low as 40°F (4°C) but often poorly above 75°F (24°C). Sow 2 seeds per square foot . Cover lightly to 1/8in and firm gently. Dry soil must be watered to ensure coolness and moisture for uniform germination.",
    image: 'lettuce.png',
    url: "https://images.unsplash.com/photo-1556781366-336f8353ba7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"  
})

pepper = Crop.create({
    name: "Pepper",
    family: "Nightshade",
    plants_per_sq_ft: 1,
    days_to_maturity: 80,
    projected_yield: 6,
    yield_unit: "pc",
    watering_needs: "During the longest hottest days of summer, water every day. During cooler weather and during spring and fall water plants every 2-3 days.",
    details: "Sow seeds in desired medium 6–8 weeks prior to transplanting. Transplant out after frost when the soil is warm and weather is settled. Ideal seedlings have buds, but no open flowers. Space pepper plants 1 per square foot",
    image: 'pepper.png',
    url: "https://www.gardeningknowhow.com/wp-content/uploads/2009/03/iStock-530253685.jpg"
})

cabbage = Crop.create({
    name: "Cabbage",
    family: "Brassica",
    plants_per_sq_ft: 1,
    days_to_maturity: 75,
    projected_yield: 1,
    yield_unit: "pc",
    watering_needs: "Cabbage needs about 1.5 inches (4 cm) of water per week to thrive. Plan to water daily if your plants have well-draining soil. Otherwise, just add water often enough to keep the soil moist. Always water early in the morning and close to the base of the plant.",
    details: "Start seedlings as above in May and transplant to the garden in June-July. To ensure mature heads, seed the crop early in areas where heavy freezes occur early in fall.",
    image: "cabbage.png",
    url: "https://images.unsplash.com/photo-1579584705540-46ebde56da8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
})

beet = Crop.create({
    name: "Beet",
    family: "Chenopod",
    plants_per_sq_ft: 12,
    days_to_maturity: 50,
    projected_yield: 12,
    yield_unit: 'pc',
    watering_needs: "If you don't get any rain, a light to moderate watering twice a week is usually enough. When watering, be careful not to wash away the soil around the beets.",
    details: "Sow 2-3 seeds 1/2in deep 8in apart. 4 times per square foot. Thin out to 3 plants per bunch.  For a continuous supply of greens and small tender beets, sow seed at 2-week intervals until 8 weeks before regular heavy frosts are expected.",
    image: "beet.png",
    url: "https://www.tasteofhome.com/wp-content/uploads/2019/07/beet-beetroot-bunch-on-grey-stone-shutterstock_705260548.jpg?fit=700,700"
})

scallions = Crop.create({
    name: "Scallions",
    family: "Allium",
    plants_per_sq_ft: 24,
    days_to_maturity: 60,
    projected_yield: 24,
    yield_unit: 'pc',
    watering_needs: " Scallions have a shallow root system, so regular watering and/or rainfall is a must as soon as the soil starts to dry out. However, do not let the plants sit in wet soil, which can lead to rot and other diseases. The soil should be consistently moist but not soggy.",
    details: "Sow 6–8 seeds per cell in 72-cell trays at the same time you would seed bulbing onions for transplant. Transplant seedling clusters 6–8in apart. 4 per square foot.",
    image: "scallions.png",
    url: "https://images.unsplash.com/photo-1602769515559-e15133a7e992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80"
})

fennel = Crop.create({
    name: "Fennel",
    family: "Umbel",
    plants_per_sq_ft: 4,
    days_to_maturity: 80,
    projected_yield: 4,
    yield_unit: "pc",
    watering_needs: "Water regularly, giving plants at least an inch of water per week (more in hot weather). Stick your finger into the soil to check moisture; if the top inch is dry, it's time to water.",
    details: "Sow midspring through early summer, 2 seeds 1/4in deep 6in apart. 4 per square foot. Thin to 1 plant per bunch",
    image: "fennel.png",
    url: "https://gardenerspath.com/wp-content/uploads/2019/02/Growing-and-Harvesting-Fennel-Cover.jpg"
})

spinach = Crop.create({
    name: "Spinach",
    family: "Chenopod",
    plants_per_sq_ft: 5,
    days_to_maturity: 30,
    projected_yield: 0.5,
    yield_unit: "lbs",
    watering_needs: "Water spinach frequently to keep the soil evenly moist but not soggy. Regular watering is essential in warm weather to prevent bolting. In general, spinach needs around 1 to 1 1/2 inches of water per week. Rather than a weekly deep watering, it's better to water several times a week.",
    details: "Spinach germinates best in cool soil. Begin sowing in early spring as soon as the ground can be worked. Sow 1-2 seed 1/2in deep every 6in. 5 per square ft",
    image: "spinach.png",
    url: "https://deepharvestfarm.com/wp/wp-content/uploads/IMG_4295.jpeg"
})

parsley = Crop.create({
    name: "Parsley",
    family: "Herbs",
    plants_per_sq_ft: 4,
    days_to_maturity: 75,
    projected_yield: 7,
    yield_unit: "bu",
    watering_needs: "Parsley will need watering about 2-3 times per week. If parsley runs out of water, it will let you know by wilting. However, as soon as you rewater, in no time it will be standing back upright again.",
    details: "Transplanting recommended: sow indoors, takes about 3 weeks to germinate. If direct seeding, sow in spring after the danger of frost has passed, about 1/4- 1/2in deep, 2 seeds, 8in apart. Thin out to 1 plant per bunch",
    image: "parsley.png",
    url: "https://images.unsplash.com/photo-1568493840567-5836c376e857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
})

cilantro = Crop.create({
    name: "Cilantro",
    family: "Herbs",
    plants_per_sq_ft: 4,
    days_to_maturity: 50,
    projected_yield: 5,
    yield_unit: "bu",
    watering_needs: "Keep the soil regularly moist, but not soaked. Good drainage is essential, as cilantro has deep roots. Aim for about one inch of water per week.",
    details: "Direct seed spring through late summer. Sow 2 seeds 1/4- 1/2in deep, 6in apart. For leaf harvest, there is no need to thin, as cilantro continues to grow well even when sown thickly. For coriander seed production, thin to 1 per bunch. Successive sowings can be done every 2-3 weeks for continual harvest of leaves.",
    image: "cilantro.png",
    url: "https://images.unsplash.com/photo-1535189487909-a262ad10c165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
})

chard = Crop.create({
    name: "Chard",
    family: "Chenopod",
    plants_per_sq_ft: 2,
    days_to_maturity: 55,
    projected_yield: 6,
    yield_unit: "lbs",
    watering_needs: "Swiss chard does best with a nice, even supply of water. Water regularly, applying 1 to 1.5 inches of water per week if it doesn't rain.",
    details: "Sow seed in a cold frame or indoors in early spring, about 5–6 weeks before transplanting out after heavy frosts become infrequent. Sow 1/2in deep, 2 seeds per cell in 72- or 128-cell flats. Thin to 1 plants per cell. Transplant out 2 per square foot, 12in apart",
    image: "chard.png",
    url: "https://images.unsplash.com/photo-1553536645-f83758b55d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
})

basil = Crop.create({
    name: "Basil",
    family: "Herbs",
    plants_per_sq_ft: 4,
    days_to_maturity: 68,
    projected_yield: 3.25,
    yield_unit: "lbs",
    watering_needs: "Basil likes to stay moist and requires approximately 1 inch of water every week. Water deeply at least once a week to keep roots growing deep and the soil moist.",
    details: "Plant seeds 1/4in deep, 2 seeds per section, 8in apart. 4 per square foot. Firm the soil over the seeds. Thinning is not necessary. Plan for a few successions especially in summer, as basil is prone to flowering.",
    image: "basil.png",
    url: "https://images.unsplash.com/photo-1629157247277-48f870757026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
})

celery = Crop.create({
    name: "Celery",
    family: "Umbel",
    plants_per_sq_ft: 2,
    days_to_maturity: 80,
    projected_yield: 2,
    yield_unit: "pc",
    watering_needs: "It needs between 1 and 1.5 inches of water per week. If celery doesn't get the moisture it needs, it'll shrivel and get extra stringy.",
    details: "Sow in early March or 10–12 weeks before transplanting outdoors. Sow 2 seeds per plug. Keep soil moist and temperatures 70–75°F (21–24°C) if possible. Seedlings emerge in 2–3 weeks. Transplant when there are 2 leaves present",
    image: "celery.png",
    url: "https://www.seeds-gallery.shop/6579-large_default/15000-seeds-celery-utah-finest.jpg"
})

leek = Crop.create({
    name: "Leek",
    family: "Allium",
    plants_per_sq_ft: 5,
    days_to_maturity: 75,
    projected_yield: 5,
    yield_unit: 'pc',
    watering_needs: "One inch of rainfall per week is enough. An inch of water will wet a sandy soil to a depth of ten inches, a heavy clay soil to six inches. If your soil is sandy, it is better to water more often than once a week. To much water could cause the root to rot",
    details: "Sow in flats in Feb.-March, 1/4in apart, 1/4in deep or start in plug flats, thinning to one plant per cell. Beginning in late spring, when approx. 8in tall and pencil-thick, transplant outdoors 6 in apart in holes dibbled about 6in deep. Only 2-3in of leaves need to extend above the soil surface. Do not firm soil - allow irrigation or rain to fill in the dibble hole.",
    image: "leek.png",
    url: "https://www.ruralsprout.com/wp-content/uploads/2021/01/grow-leeks.jpg"
})

onion = Crop.create({
    name: "Onion",
    family: "Allium",
    plants_per_sq_ft: 4,
    days_to_maturity: 105,
    projected_yield: 4,
    yield_unit: "pc",
    watering_needs: "Ideal onion water needs are to irrigate to a depth of an inch (2.5 cm.) once a week rather than a light sprinkling each day. If you are watering onions with a hose or sprinkler, water in the morning rather than during the heat of the day, which will just end up being evaporated. Overhead watering can spell trouble",
    details: "For direct seeding: in April or early May, or as soon as the soil can be prepared in early spring, sow in about 2 seeds/in, 1/4- 1/2in deep, 6in apart. Plant 8in apart for larger onions.",
    image: "onion.png",
    url: "https://cdn.harvesttotable.com/htt/2012/11/23185507/Onion-bulbs1.jpg"
})

sunflower = Crop.create({
    name: "Sunflower",
    family: "Aster",
    plants_per_sq_ft: 1,
    days_to_maturity: 90,
    projected_yield: 10,
    yield_unit: "stems",
    watering_needs: "Although sunflowers require a lot of water to germinate, they only require an inch of water per week during the growing season. Use a watering nozzle to easily water once a week until the top 6 inches of soil is moist.",
    details: "Sow 2 seeds at the middle of each square foot after the last frost. Direct Seeding is preferred to avoid root disturbance",
    image: "sunflower.png",
    url: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
})

zucchini = Crop.create({
    name: "Zucchini",
    family: "Curcubit",
    plants_per_sq_ft: 1,
    days_to_maturity: 48,
    projected_yield: 5,
    yield_unit: "lbs",
    watering_needs: "Summer squash need one inch of water per week. To put that into perspective, you'll need to water mature plants once a week so the soil is moist 8 to 12 inches beneath the surface. Water at the base of the plants",
    details: "If possible, start indoors 2 weeks before transplanting outside. Transplant once there are two leaves per plant. Transplant 1 per square ft, being careful with the roots as they are sensitive.",
    image: "zucchini.png",
    url: "https://gardenerspath.com/wp-content/uploads/2020/06/Golden-Zucchini-Plant-Growing-in-the-Garden.jpg"
})

perilla = Crop.create({
    name: "Perilla",
    family: "Herbs",
    plants_per_sq_ft: 4,
    days_to_maturity: 80,
    projected_yield: 30,
    yield_unit: "pc",
    watering_needs: "Perilla must be watered regularly. It needs approximately one inch of water per week. This doesn't all need to come from you. If you have a way to measure the amount of rain you get each week, you'll only need to supplement what doesn't come from nature.",
    details: "Store seed in the freezer for best germination. Sow in spring after the last frost, 1-2 seeds per section. Sow seeds shallowly or cover lightly, as light is required for germination. Can grow somewhat thickly, or thin to 6-12in apart.",
    image: "perilla.png",
    url: "https://cdn.shopify.com/s/files/1/0549/4476/0049/products/il_fullxfull.2651724111_idu6_1400x.jpg?v=1632835729"
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



puts 'Seeded 🌱'
