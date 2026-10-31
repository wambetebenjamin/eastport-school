/* =================================
------------------------------------
  Eastport International Training College
  Central content store (programmes, faculties, news, portal demo data)
 ------------------------------------
 ====================================*/

'use strict';

var EP = {};

EP.contact = {
	name: 'Eastport International Training College',
	shortName: 'Eastport College',
	campus: 'Chai Plaza, 2nd Floor, Kenyatta Street, Kericho CBD',
	phone: '0757 478 077',
	phoneHref: 'tel:0757478077',
	whatsapp: 'https://wa.me/254757478077',
	email: 'admissions@eastportinternationalcollege.ac.ke',
	hours: 'Mon–Fri: 8:00 AM – 5:00 PM · Sat: 8:30 AM – 1:00 PM',
	examCentres: 'KNEC 518112 · CDACC 0350007 · TVETA Centre 401002'
};

EP.faculties = [
	{
		slug: 'health',
		name: 'School of Health and Social Sciences',
		short: 'Health Sciences',
		icon: 'fa-heartbeat',
		image: 'img/categories/1.jpg',
		count: 34,
		blurb: 'Clinical simulation, phlebotomy and community health practice.'
	},
	{
		slug: 'ict',
		name: 'School of Information Communication Technology',
		short: 'ICT & Computing',
		icon: 'fa-laptop',
		image: 'img/categories/2.jpg',
		count: 26,
		blurb: 'Software development, networking and cybersecurity labs.'
	},
	{
		slug: 'business',
		name: 'School of Business Studies',
		short: 'Business Studies',
		icon: 'fa-line-chart',
		image: 'img/categories/3.jpg',
		count: 31,
		blurb: 'Accounting, sales, supply chain and entrepreneurship.'
	},
	{
		slug: 'professional',
		name: 'School of Professional Studies (KASNEB / CHRP)',
		short: 'Professional Studies',
		icon: 'fa-certificate',
		image: 'img/categories/4.jpg',
		count: 18,
		blurb: 'KASNEB, CHRP and professional examination preparation.'
	},
	{
		slug: 'media',
		name: 'School of Journalism and Mass Media',
		short: 'Journalism & Media',
		icon: 'fa-microphone',
		image: 'img/categories/5.jpg',
		count: 15,
		blurb: 'Broadcast, digital storytelling and studio production.'
	},
	{
		slug: 'languages',
		name: 'School of Languages',
		short: 'Languages',
		icon: 'fa-language',
		image: 'img/categories/6.jpg',
		count: 12,
		blurb: 'Kiswahili, English, French and sign language.'
	},
	{
		slug: 'technical',
		name: 'School of Technical Studies',
		short: 'Technical Studies',
		icon: 'fa-cogs',
		image: 'img/courses/1.jpg',
		count: 29,
		blurb: 'Electrical, solar, welding and automotive workshops.'
	},
	{
		slug: 'hospitality',
		name: 'School of Hospitality and Institutional Management',
		short: 'Hospitality & Tourism',
		icon: 'fa-cutlery',
		image: 'img/courses/2.jpg',
		count: 21,
		blurb: 'Commercial kitchens, pastry, housekeeping and front office.'
	},
	{
		slug: 'beauty',
		name: 'School of Beauty, Hairdressing and Personal Care',
		short: 'Beauty & Personal Care',
		icon: 'fa-scissors',
		image: 'img/courses/3.jpg',
		count: 16,
		blurb: 'Hairdressing, cosmetology and barbering salons.'
	},
	{
		slug: 'office',
		name: 'School of Office Administration',
		short: 'Office Administration',
		icon: 'fa-folder-open',
		image: 'img/courses/4.jpg',
		count: 13,
		blurb: 'Secretarial, records management and office technology.'
	},
	{
		slug: 'international',
		name: 'International Courses (ABMA / ABE / ICM / ICDL)',
		short: 'International Courses',
		icon: 'fa-globe',
		image: 'img/courses/5.jpg',
		count: 38,
		blurb: 'Internationally recognised UK and global qualifications.'
	}
];

EP.programmes = [
	{
		slug: 'diploma-food-beverage',
		title: 'Diploma in Food & Beverage Service and Sales',
		faculty: 'hospitality',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE C- (minus)',
		fee: 'KSh 24,500 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / HOS/D/014',
		image: 'img/courses/2.jpg',
		students: 148,
		trainer: 'Faith Cherotich',
		role: 'Head Pastry Chef, Kericho',
		summary: 'Master commercial kitchen production, front office service and beverage sales inside our working restaurant and pastry hub.',
		careers: ['Restaurant supervisor', 'Pastry chef', 'Front office manager', 'Catering entrepreneur'],
		units: ['Food production theory', 'Food & beverage service', 'Kitchen management', 'Hygiene and safety standards', 'Costing and menu planning', 'Industrial attachment']
	},
	{
		slug: 'diploma-ict-networking',
		title: 'Diploma in ICT & Networking',
		faculty: 'ict',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE C- (minus)',
		fee: 'KSh 26,000 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / ICT/D/021',
		image: 'img/courses/3.jpg',
		students: 132,
		trainer: 'Brian Kipkorir',
		role: 'Network Specialist, Kericho',
		summary: 'Configure live switches, routers and servers, then defend networks in our cyber range before your industry attachment.',
		careers: ['Network administrator', 'ICT support officer', 'Cloud support associate', 'IT entrepreneur'],
		units: ['Network infrastructure', 'Server administration', 'Cyber security essentials', 'Web development', 'Cloud fundamentals', 'Industrial attachment']
	},
	{
		slug: 'diploma-nursing-assistant',
		title: 'Diploma in Community Health & Nursing Assistant Practice',
		faculty: 'health',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE C- (minus)',
		fee: 'KSh 28,500 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / HLT/D/009',
		image: 'img/categories/1.jpg',
		students: 176,
		trainer: 'Mercy Chelangat',
		role: 'Clinical Intern, Kericho County Referral',
		summary: 'Train in our clinical simulation and phlebotomy labs with attachment placements at Kericho County Referral Hospital.',
		careers: ['Nursing assistant', 'Community health officer', 'Phlebotomist', 'Clinic administrator'],
		units: ['Human anatomy and physiology', 'Clinical procedures', 'Phlebotomy practice', 'Community health', 'Infection prevention', 'Hospital attachment']
	},
	{
		slug: 'diploma-business-management',
		title: 'Diploma in Business Management',
		faculty: 'business',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE C- (minus)',
		fee: 'KSh 22,000 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / BUS/D/003',
		image: 'img/categories/3.jpg',
		students: 210,
		trainer: 'Daniel Kimutai',
		role: 'Branch Manager, Kericho',
		summary: 'Build a business from a real trading plan — our students run a campus enterprise as part of their assessment.',
		careers: ['Business administrator', 'Sales executive', 'Entrepreneur', 'Credit officer'],
		units: ['Principles of management', 'Business finance', 'Entrepreneurship', 'Marketing', 'Business law', 'Industrial attachment']
	},
	{
		slug: 'diploma-accounting',
		title: 'Diploma in Accounting & Finance',
		faculty: 'business',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE C (plain)',
		fee: 'KSh 23,500 per term',
		body: 'KNEC / KASNEB pathway',
		code: 'KNEC 518112 / ACC/D/007',
		image: 'img/courses/1.jpg',
		students: 164,
		trainer: 'Jane Rotich',
		role: 'Accountant, Rift Valley',
		summary: 'Practice with QuickBooks, Sage and manual ledgers, with a direct KASNEB progression pathway on completion.',
		careers: ['Accounts assistant', 'Bookkeeper', 'Payroll officer', 'Audit assistant'],
		units: ['Financial accounting', 'Cost accounting', 'Taxation', 'Accounting software', 'Auditing principles', 'Industrial attachment']
	},
	{
		slug: 'diploma-electrical-solar',
		title: 'Diploma in Electrical & Solar Installation',
		faculty: 'technical',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE D+ (plus)',
		fee: 'KSh 25,000 per term',
		body: 'CDACC / EPRA',
		code: 'CDACC 0350007 / ENG/D/012',
		image: 'img/courses/4.jpg',
		students: 121,
		trainer: 'Dennis Rotich',
		role: 'Solar Contractor, Rift Valley',
		summary: 'Conduit piping, industrial motors and solar inverters — prepared for EPRA licensing and KNEC assessment.',
		careers: ['Solar technician', 'Electrical installer', 'Maintenance technician', 'EPRA licensed contractor'],
		units: ['Electrical installation', 'Solar PV systems', 'Motor controls', 'Engineering drawing', 'Workshop practice', 'Industrial attachment']
	},
	{
		slug: 'diploma-journalism',
		title: 'Diploma in Journalism & Digital Media',
		faculty: 'media',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE C- (minus)',
		fee: 'KSh 23,000 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / MED/D/006',
		image: 'img/categories/5.jpg',
		students: 96,
		trainer: 'Kevin Cheruiyot',
		role: 'Broadcast journalist, South Rift',
		summary: 'File real stories from Kericho in our radio studio and edit suites, with a published digital portfolio by graduation.',
		careers: ['Reporter', 'Radio presenter', 'Social media manager', 'Content producer'],
		units: ['News reporting', 'Radio production', 'Digital storytelling', 'Media law and ethics', 'Photojournalism', 'Industrial attachment']
	},
	{
		slug: 'diploma-catering',
		title: 'Diploma in Catering & Institutional Management',
		faculty: 'hospitality',
		level: 'Diploma',
		duration: '2 years (3 terms per year)',
		grade: 'KCSE D+ (plus)',
		fee: 'KSh 24,000 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / CAT/D/018',
		image: 'img/courses/6.jpg',
		students: 118,
		trainer: 'Sharon Chepkoech',
		role: 'Catering Manager, Tea Estate Resort',
		summary: 'Run bulk catering for real campus events — quantity cooking, nutrition, hygiene and kitchen cost control.',
		careers: ['Institutional cook', 'Catering supervisor', 'Nutrition assistant', 'Food service entrepreneur'],
		units: ['Quantity food production', 'Nutrition and dietetics', 'Food hygiene', 'Stores management', 'Menu costing', 'Industrial attachment']
	},
	{
		slug: 'certificate-phlebotomy',
		title: 'Certificate in Phlebotomy & Medical Laboratory Support',
		faculty: 'health',
		level: 'Certificate',
		duration: '9 months',
		grade: 'KCSE D (plain)',
		fee: 'KSh 18,500 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / HLT/C/041',
		image: 'img/categories/1.jpg',
		students: 87,
		trainer: 'Dr. Alice Mwangi',
		role: 'Laboratory Manager, Kericho',
		summary: 'Sterile draw technique, specimen handling and diagnostic centrifuge practice in a fully equipped draw station.',
		careers: ['Phlebotomist', 'Laboratory assistant', 'Clinic assistant', 'Sample courier coordinator'],
		units: ['Blood collection technique', 'Specimen handling', 'Laboratory safety', 'Medical terminology', 'Client care', 'Clinical attachment']
	},
	{
		slug: 'certificate-software-dev',
		title: 'Certificate in Software Development',
		faculty: 'ict',
		level: 'Certificate',
		duration: '1 year',
		grade: 'KCSE D+ (plus)',
		fee: 'KSh 19,500 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / ICT/C/033',
		image: 'img/courses/7.jpg',
		students: 143,
		trainer: 'Brian Kipkorir',
		role: 'Software developer & trainer',
		summary: 'Go from HTML to deployed applications in two terms, shipping a live portfolio project before attachment.',
		careers: ['Junior developer', 'Freelance web developer', 'QA tester', 'IT support'],
		units: ['HTML, CSS & JavaScript', 'Python programming', 'Databases', 'Version control', 'UI fundamentals', 'Project & attachment']
	},
	{
		slug: 'certificate-business-startup',
		title: 'Certificate in Entrepreneurship & Small Business',
		faculty: 'business',
		level: 'Certificate',
		duration: '9 months',
		grade: 'KCSE D (plain)',
		fee: 'KSh 16,500 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / BUS/C/027',
		image: 'img/courses/8.jpg',
		students: 76,
		trainer: 'Daniel Kimutai',
		role: 'Business trainer',
		summary: 'Learn bookkeeping, pricing, digital marketing and stock control while running a micro-enterprise with real capital.',
		careers: ['Small business owner', 'Shop manager', 'Sales agent', 'Bookkeeper'],
		units: ['Business idea development', 'Bookkeeping', 'Digital marketing', 'Customer service', 'Stock control', 'Business plan']
	},
	{
		slug: 'certificate-hairdressing',
		title: 'Certificate in Hairdressing & Beauty Therapy',
		faculty: 'beauty',
		level: 'Certificate',
		duration: '1 year',
		grade: 'Open entry / KCPE',
		fee: 'KSh 17,000 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / BEA/C/052',
		image: 'img/courses/3.jpg',
		students: 94,
		trainer: 'Grace Wanjiku',
		role: 'Salon owner, Kericho CBD',
		summary: 'Train on paying clients in our student salon — braiding, styling, manicure, pedicure and facial therapy.',
		careers: ['Hairdresser', 'Beauty therapist', 'Salon owner', 'Bridal stylist'],
		units: ['Hair styling', 'Braiding & weaving', 'Manicure and pedicure', 'Facial therapy', 'Salon management', 'Client attachment']
	},
	{
		slug: 'certificate-social-work',
		title: 'Certificate in Community Development & Social Work',
		faculty: 'health',
		level: 'Certificate',
		duration: '1 year',
		grade: 'KCSE D (plain)',
		fee: 'KSh 17,500 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / SOC/C/044',
		image: 'img/page-bg/1.jpg',
		students: 63,
		trainer: 'Pauline Kirui',
		role: 'Community development officer',
		summary: 'Field placements with county bursary offices and community-based organisations across Kericho County.',
		careers: ['Community health volunteer', 'Social work assistant', 'NGO field officer', 'County bursary clerk'],
		units: ['Community development', 'Social work practice', 'Counselling basics', 'Project management', 'Report writing', 'Field attachment']
	},
	{
		slug: 'certificate-office-admin',
		title: 'Certificate in Office Administration & Records Management',
		faculty: 'office',
		level: 'Certificate',
		duration: '1 year',
		grade: 'KCSE D+ (plus)',
		fee: 'KSh 16,000 per term',
		body: 'KNEC',
		code: 'KNEC 518112 / OFF/C/019',
		image: 'img/courses/4.jpg',
		students: 72,
		trainer: 'Nancy Chebet',
		role: 'Administrative officer',
		summary: 'Typing speed, digital filing, minute taking and front office etiquette for county and private offices.',
		careers: ['Front office assistant', 'Records clerk', 'Data entry operator', 'Personal assistant'],
		units: ['Office practice', 'Records management', 'Business communication', 'Computer applications', 'Customer care', 'Attachment']
	},
	{
		slug: 'certificate-hotel-operations',
		title: 'Certificate in Hotel & Front Office Operations',
		faculty: 'hospitality',
		level: 'Certificate',
		duration: '1 year',
		grade: 'KCSE D (plain)',
		fee: 'KSh 18,000 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / HOS/C/023',
		image: 'img/courses/6.jpg',
		students: 81,
		trainer: 'Faith Cherotich',
		role: 'Hospitality trainer',
		summary: 'Reservation systems, guest relations, housekeeping standards and night audit practice in a simulated hotel.',
		careers: ['Front office agent', 'Housekeeping supervisor', 'Reservations agent', 'Guest relations officer'],
		units: ['Front office operations', 'Housekeeping', 'Guest relations', 'Reservations systems', 'Hotel accounting basics', 'Attachment']
	},
	{
		slug: 'artisan-welding',
		title: 'Artisan Certificate in Welding & Metal Fabrication',
		faculty: 'technical',
		level: 'Artisan',
		duration: '6 months',
		grade: 'Open entry',
		fee: 'KSh 14,500 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / ENG/A/061',
		image: 'img/courses/1.jpg',
		students: 58,
		trainer: 'Samuel Kiprotich',
		role: 'Fabricator, Kericho',
		summary: 'Arc, MIG and gas welding with fabrication projects — gates, tanks and furniture produced for real clients.',
		careers: ['Welder', 'Fabricator', 'Workshop assistant', 'Self-employed metalworker'],
		units: ['Arc welding', 'Gas welding', 'Metal fabrication', 'Technical drawing', 'Workshop safety', 'Production project']
	},
	{
		slug: 'artisan-motor-vehicle',
		title: 'Artisan Certificate in Motor Vehicle Mechanics',
		faculty: 'technical',
		level: 'Artisan',
		duration: '1 year',
		grade: 'Open entry',
		fee: 'KSh 15,500 per term',
		body: 'CDACC',
		code: 'CDACC 0350007 / ENG/A/064',
		image: 'img/courses/8.jpg',
		students: 66,
		trainer: 'Samuel Kiprotich',
		role: 'Garage owner',
		summary: 'Engine overhaul, braking systems, diagnostics and wiring on petrol and diesel vehicles in our garage bay.',
		careers: ['Motor vehicle mechanic', 'Auto electrician', 'Garage assistant', 'Fleet technician'],
		units: ['Engine systems', 'Braking systems', 'Auto electrics', 'Vehicle diagnostics', 'Preventive maintenance', 'Garage attachment']
	},
	{
		slug: 'kasneb-atd',
		title: 'KASNEB Accounting Technicians Diploma (ATD)',
		faculty: 'professional',
		level: 'Professional',
		duration: '18 months (3 levels)',
		grade: 'KCSE C- (minus)',
		fee: 'KSh 21,000 per level',
		body: 'KASNEB',
		code: 'KASNEB ATD / Centre 401002',
		image: 'img/categories/4.jpg',
		students: 104,
		trainer: 'Jane Rotich',
		role: 'KASNEB tutor',
		summary: 'Timely syllabus coverage with past-paper drills and revision throughout all three examination levels.',
		careers: ['Accounts clerk', 'Audit trainee', 'Tax assistant', 'Progression to CPA'],
		units: ['Financial accounting', 'Business mathematics', 'Principles of management', 'Taxation', 'Cost accounting', 'Revision & exams']
	},
	{
		slug: 'kasneb-cpa',
		title: 'KASNEB Certified Public Accountants (CPA)',
		faculty: 'professional',
		level: 'Professional',
		duration: '24 months (3 sections)',
		grade: 'KCSE C+ (plus)',
		fee: 'KSh 24,000 per paper',
		body: 'KASNEB',
		code: 'KASNEB CPA / Centre 401002',
		image: 'img/courses/1.jpg',
		students: 74,
		trainer: 'Mr. Kipkoech Mutai',
		role: 'Senior lecturer & Principal',
		summary: 'Evening and weekend streams for working professionals, with mock examinations before every sitting.',
		careers: ['Accountant', 'Auditor', 'Finance officer', 'Tax consultant'],
		units: ['Financial reporting', 'Management accounting', 'Taxation', 'Audit & assurance', 'Business law', 'Mock examinations']
	},
	{
		slug: 'chrp',
		title: 'Certified Human Resource Professional (CHRP)',
		faculty: 'professional',
		level: 'Professional',
		duration: '12 months',
		grade: 'Degree / Diploma holder',
		fee: 'KSh 26,000 per module',
		body: 'HRMPEB',
		code: 'CHRP Part I–III',
		image: 'img/categories/4.jpg',
		students: 42,
		trainer: 'Pauline Kirui',
		role: 'HR practitioner & trainer',
		summary: 'Case-based HR practice covering Kenyan labour law, payroll, performance and industrial relations.',
		careers: ['HR assistant', 'Recruitment officer', 'Payroll administrator', 'HR business partner'],
		units: ['HR management', 'Labour law', 'Payroll administration', 'Industrial relations', 'Organisational behaviour', 'HR practice project']
	},
	{
		slug: 'abma-diploma-business',
		title: 'ABMA Diploma in Business Administration',
		faculty: 'international',
		level: 'International',
		duration: '12 months',
		grade: 'KCSE C- (minus) or equivalent',
		fee: 'KSh 32,000 per level',
		body: 'ABMA (UK)',
		code: 'ABMA Level 4–6',
		image: 'img/courses/5.jpg',
		students: 57,
		trainer: 'International faculty',
		role: 'UK awarding partner',
		summary: 'A UK-endorsed business qualification delivered in Kericho, recognised for global articulation.',
		careers: ['Business administrator', 'Study abroad progression', 'Management trainee', 'Entrepreneur'],
		units: ['Strategic management', 'Marketing management', 'Financial management', 'Business research', 'Leadership practice', 'Dissertation project']
	},
	{
		slug: 'icdl',
		title: 'ICDL Digital Literacy Certification',
		faculty: 'international',
		level: 'International',
		duration: '3 months',
		grade: 'Open entry',
		fee: 'KSh 12,000 per module',
		body: 'ICDL',
		code: 'ICDL Profile / Centre 401002',
		image: 'img/categories/2.jpg',
		students: 186,
		trainer: 'ICT faculty',
		role: 'ICDL accredited centre',
		summary: 'Internationally recognised digital skills certificate — word processing, spreadsheets, presentation and internet.',
		careers: ['Office assistant', 'Data clerk', 'Digital skills trainer', 'Civil service roles'],
		units: ['Computer essentials', 'Word processing', 'Spreadsheets', 'Presentations', 'Online essentials', 'Cyber safety']
	},
	{
		slug: 'icm-bookkeeping',
		title: 'ICM Certificate in Bookkeeping & Accounts',
		faculty: 'international',
		level: 'International',
		duration: '6 months',
		grade: 'KCSE D+ (plus)',
		fee: 'KSh 18,000 per level',
		body: 'ICM (UK)',
		code: 'ICM Level 2–3',
		image: 'img/courses/8.jpg',
		students: 49,
		trainer: 'Business faculty',
		role: 'ICM accredited centre',
		summary: 'UK bookkeeping qualification for shop owners, SACCO clerks and accounting assistants.',
		careers: ['Bookkeeper', 'SACCO clerk', 'Accounts assistant', 'Shop manager'],
		units: ['Double entry bookkeeping', 'Final accounts', 'Computerised accounting', 'Payroll', 'Business communication', 'Examination practice']
	},
	{
		slug: 'certificate-language',
		title: 'Certificate in Foreign & Sign Languages',
		faculty: 'languages',
		level: 'Certificate',
		duration: '6 months',
		grade: 'Open entry',
		fee: 'KSh 13,500 per term',
		body: 'College certificate',
		code: 'EITC/LANG/201',
		image: 'img/page-bg/3.jpg',
		students: 68,
		trainer: 'Languages faculty',
		role: 'Language trainers',
		summary: 'French, Kiswahili, English proficiency and Kenyan Sign Language for the workplace and travel.',
		careers: ['Translator assistant', 'Tourism guide', 'Front office staff', 'Sign language interpreter trainee'],
		units: ['Oral communication', 'Grammar & writing', 'Conversation practice', 'Cultural studies', 'Workplace language', 'Final assessment']
	}
];

EP.news = [
	{
		slug: 'january-intake-2027',
		title: 'January 2027 intake opens with 253 approved programmes',
		image: 'img/blog/1.jpg',
		category: 'Admissions',
		date: 'October 22, 2026',
		author: 'Admissions Office',
		authorPic: 'img/authors/1.jpg',
		excerpt: 'Eastport International Training College is now admitting students for the January 2027 intake across all eleven faculties, with morning, afternoon and evening streams.'
	},
	{
		slug: 'knec-results',
		title: 'KNEC and CDACC exam registration closes on 14 November',
		date: 'October 15, 2026',
		image: 'img/blog/2.jpg',
		category: 'Examinations',
		author: 'Examinations Office',
		authorPic: 'img/authors/2.jpg',
		excerpt: 'All continuing students should confirm their registration details at the second-floor exam desk before 14 November. Registration slips will be issued through the student portal.'
	},
	{
		slug: 'bursary-application',
		title: 'Kericho County bursary applications: how to apply',
		date: 'October 8, 2026',
		image: 'img/blog/3.jpg',
		category: 'Student Finance',
		author: 'Welfare Office',
		authorPic: 'img/authors/3.jpg',
		excerpt: 'Eligible students can apply for the Kericho County TVET bursary fund. Our welfare desk is assisting students to compile the required documents, free of charge.'
	},
	{
		slug: 'hospital-attachment',
		title: 'Health sciences students begin attachment at Kericho Referral',
		date: 'September 26, 2026',
		image: 'img/categories/1.jpg',
		category: 'Attachment',
		author: 'Academic Registrar',
		authorPic: 'img/authors/4.jpg',
		excerpt: 'Thirty-two clinical students started their three-month hospital attachment this week, joining theatres, outpatient departments and the laboratory.'
	},
	{
		slug: 'ict-labs-upgrade',
		title: 'ICT suites upgraded with new network and cyber-security kits',
		date: 'September 12, 2026',
		image: 'img/courses/3.jpg',
		category: 'Campus',
		author: 'ICT Department',
		authorPic: 'img/authors/5.jpg',
		excerpt: 'Two additional computer suites are now live, bringing the campus to 120 workstations with high-speed fibre and a dedicated networking sandbox.'
	},
	{
		slug: 'fees-installments',
		title: 'Flexible three-part fee instalments now available',
		date: 'September 2, 2026',
		image: 'img/courses/1.jpg',
		category: 'Student Finance',
		author: 'Finance Office',
		authorPic: 'img/authors/6.jpg',
		excerpt: 'Students can now settle termly fees in three instalments after a 40% deposit, while retaining full access to laboratories, attachment and examinations.'
	}
];

EP.testimonials = [
	{
		name: 'Faith Cherotich',
		course: 'Diploma in Food & Beverage · Class of 2025',
		image: 'img/authors/1.jpg',
		quote: 'When I joined Eastport at Chai Plaza I had never touched a commercial bakery oven. Today I head pastry at a leading tea estate resort in Kericho.',
		tag: 'KNEC Certified'
	},
	{
		name: 'Brian Kipkorir',
		course: 'Diploma in ICT & Networking · Class of 2025',
		image: 'img/authors/2.jpg',
		quote: 'In the computer suites we configure actual switches and troubleshoot real networks. That confidence helped me launch an IT support firm in Kericho CBD.',
		tag: 'CDACC Assessed'
	},
	{
		name: 'Mercy Chelangat',
		course: 'Theatre Technology · Class of 2026',
		image: 'img/authors/3.jpg',
		quote: 'The surgical simulation lab mirrors the exact hospital theatre layout, so maintaining a sterile field on attachment felt completely natural.',
		tag: 'Hospital Attachment'
	},
	{
		name: 'Dennis Rotich',
		course: 'Electrical Engineering · Class of 2025',
		image: 'img/authors/4.jpg',
		quote: 'From conduit piping to solar inverters and industrial motors, workshop practice prepared me to pass EPRA and KNEC certifications first sitting.',
		tag: 'EPRA & KNEC'
	}
];

EP.team = [
	{
		name: 'Mr. Moses Terer',
		role: 'College Director & Founder',
		image: 'img/authors/5.jpg',
		quote: 'When a student walks through our doors on the second floor of Chai Plaza, they are trusting us with their future. 70% of your time here is spent practising, creating and learning under instructors who know what employers look for.'
	},
	{
		name: 'Mr. Kipkoech Mutai',
		role: 'Principal & Senior Lecturer',
		image: 'img/authors/6.jpg',
		quote: 'Our promise to every parent and student is straightforward: we guide you with patience, prepare you thoroughly for KNEC and CDACC examinations, and walk with you into your career.'
	}
];

EP.portal = {
	demo: {
		identifier: 'EITC/2026/0148',
		email: 'student@eastport.ac.ke',
		password: 'eastport2026'
	},
	student: {
		name: 'Faith Cherotich',
		admission: 'EITC/2026/0148',
		programme: 'Diploma in Food & Beverage Service and Sales',
		faculty: 'School of Hospitality and Institutional Management',
		year: 'Year 1 · Term 3',
		classTeacher: 'Ms. Faith Cherotich',
		email: 'faith.cherotich@student.eastport.ac.ke',
		phone: '+254 7•• ••• 148',
		image: 'img/authors/1.jpg',
		balance: 'KSh 12,750',
		paid: 'KSh 73,500',
		attendance: 94,
		progress: 68,
		courses: [
			{ code: 'HOS 101', unit: 'Food Production Theory', trainer: 'F. Cherotich', score: 'A', remark: 'Excellent' },
			{ code: 'HOS 102', unit: 'Food & Beverage Service', trainer: 'S. Chepkoech', score: 'B+', remark: 'Very good' },
			{ code: 'HOS 103', unit: 'Kitchen Management', trainer: 'F. Cherotich', score: 'A-', remark: 'Excellent' },
			{ code: 'COM 110', unit: 'Communication Skills', trainer: 'N. Chebet', score: 'B', remark: 'Good' },
			{ code: 'HOS 104', unit: 'Hygiene & Safety Standards', trainer: 'S. Chepkoech', score: 'A', remark: 'Excellent' }
		],
		timetable: [
			{ time: 'Mon · 8:00 AM', subject: 'Food Production Practical', venue: 'Kitchen Lab 2' },
			{ time: 'Tue · 10:00 AM', subject: 'Food & Beverage Service', venue: 'Restaurant Sim' },
			{ time: 'Wed · 8:00 AM', subject: 'Kitchen Management', venue: 'Room 4B' },
			{ time: 'Thu · 2:00 PM', subject: 'Communication Skills', venue: 'Room 2A' },
			{ time: 'Fri · 9:00 AM', subject: 'Hygiene & Safety Standards', venue: 'Kitchen Lab 1' }
		],
		announcements: [
			{ tag: 'Examinations', title: 'Term 3 practical assessment timetable released', body: 'Practical assessments begin 24 November at Kitchen Lab 2. Arrive 30 minutes early with your full kit.' },
			{ tag: 'Fees', title: 'Instalment 2 due on 15 November', body: 'Pay via the school paybill and upload the slip in the portal to have your balance updated within 24 hours.' },
			{ tag: 'Attachment', title: 'Attachment placement letters ready', body: 'Collect your three-month attachment letter from the registrar’s desk from Monday.' }
		]
	}
};
