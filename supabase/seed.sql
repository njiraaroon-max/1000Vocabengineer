-- =============================================
-- SEED DATA: Engineering Vocabulary Sets
-- Run this AFTER schema.sql in Supabase SQL Editor
-- =============================================

-- ===== SET 1: Engineering Fundamentals (Easy) =====
INSERT INTO vocabulary_sets (id, title, description, language_pair, difficulty, category, icon_url, word_count)
VALUES (
  '11111111-1111-1111-1111-111111111111',
  'Engineering Fundamentals',
  'คำศัพท์พื้นฐานทางวิศวกรรมที่ทุกสาขาต้องรู้',
  'en-th', 'easy', 'general', '⚙️', 30
);

INSERT INTO vocabularies (set_id, word, part_of_speech, meaning_th, meaning_en, example_en, example_th, order_index) VALUES
('11111111-1111-1111-1111-111111111111', 'force', 'noun', 'แรง', 'A push or pull that can change the motion of an object', 'The force applied to the beam caused it to bend.', 'แรงที่กระทำต่อคานทำให้มันโค้งงอ', 1),
('11111111-1111-1111-1111-111111111111', 'energy', 'noun', 'พลังงาน', 'The capacity to do work or produce change', 'Solar energy is converted into electricity by photovoltaic cells.', 'พลังงานแสงอาทิตย์ถูกแปลงเป็นไฟฟ้าโดยเซลล์โฟโตวอลตาอิก', 2),
('11111111-1111-1111-1111-111111111111', 'pressure', 'noun', 'ความดัน', 'Force per unit area applied on a surface', 'The water pressure increases with depth.', 'ความดันน้ำเพิ่มขึ้นตามความลึก', 3),
('11111111-1111-1111-1111-111111111111', 'velocity', 'noun', 'ความเร็ว (มีทิศทาง)', 'The speed of an object in a given direction', 'The velocity of the car was 60 km/h heading north.', 'ความเร็วของรถคือ 60 กม./ชม. มุ่งหน้าไปทางทิศเหนือ', 4),
('11111111-1111-1111-1111-111111111111', 'acceleration', 'noun', 'ความเร่ง', 'The rate of change of velocity over time', 'The acceleration due to gravity is 9.81 m/s².', 'ความเร่งเนื่องจากแรงโน้มถ่วงคือ 9.81 เมตร/วินาที²', 5),
('11111111-1111-1111-1111-111111111111', 'torque', 'noun', 'แรงบิด', 'A twisting force that causes rotation', 'The engine produces 300 Nm of torque.', 'เครื่องยนต์ผลิตแรงบิด 300 นิวตัน-เมตร', 6),
('11111111-1111-1111-1111-111111111111', 'friction', 'noun', 'แรงเสียดทาน', 'The resistance to motion between surfaces in contact', 'Friction between the tire and road prevents skidding.', 'แรงเสียดทานระหว่างยางกับถนนป้องกันการลื่นไถล', 7),
('11111111-1111-1111-1111-111111111111', 'density', 'noun', 'ความหนาแน่น', 'Mass per unit volume of a substance', 'The density of steel is about 7,850 kg/m³.', 'ความหนาแน่นของเหล็กกล้าประมาณ 7,850 กก./ลบ.ม.', 8),
('11111111-1111-1111-1111-111111111111', 'voltage', 'noun', 'แรงดันไฟฟ้า', 'Electric potential difference between two points', 'The voltage across the resistor is 12 volts.', 'แรงดันไฟฟ้าคร่อมตัวต้านทานคือ 12 โวลต์', 9),
('11111111-1111-1111-1111-111111111111', 'current', 'noun', 'กระแสไฟฟ้า', 'The flow of electric charge through a conductor', 'The current flowing through the wire is 5 amperes.', 'กระแสไฟฟ้าที่ไหลผ่านสายไฟคือ 5 แอมแปร์', 10),
('11111111-1111-1111-1111-111111111111', 'resistance', 'noun', 'ความต้านทาน', 'Opposition to the flow of electric current', 'The resistance of the circuit is measured in ohms.', 'ความต้านทานของวงจรวัดเป็นหน่วยโอห์ม', 11),
('11111111-1111-1111-1111-111111111111', 'power', 'noun', 'กำลัง', 'The rate at which work is done or energy is transferred', 'The motor has a power output of 500 watts.', 'มอเตอร์มีกำลังขาออก 500 วัตต์', 12),
('11111111-1111-1111-1111-111111111111', 'efficiency', 'noun', 'ประสิทธิภาพ', 'The ratio of useful output to total input', 'The engine operates at 85% efficiency.', 'เครื่องยนต์ทำงานที่ประสิทธิภาพ 85%', 13),
('11111111-1111-1111-1111-111111111111', 'load', 'noun', 'โหลด / น้ำหนักบรรทุก', 'A force or weight applied to a structure', 'The bridge must support a load of 50 tons.', 'สะพานต้องรองรับน้ำหนักบรรทุก 50 ตัน', 14),
('11111111-1111-1111-1111-111111111111', 'stress', 'noun', 'ความเค้น', 'Internal force per unit area within a material', 'The stress on the beam exceeded the yield point.', 'ความเค้นบนคานเกินจุดครากแล้ว', 15),
('11111111-1111-1111-1111-111111111111', 'strain', 'noun', 'ความเครียด (วัสดุ)', 'The deformation of a material due to stress', 'The strain in the cable was measured using a gauge.', 'ความเครียดในสายเคเบิลวัดโดยใช้เกจ', 16),
('11111111-1111-1111-1111-111111111111', 'momentum', 'noun', 'โมเมนตัม', 'The product of mass and velocity of an object', 'The momentum of the truck increased as it accelerated.', 'โมเมนตัมของรถบรรทุกเพิ่มขึ้นเมื่อมันเร่งความเร็ว', 17),
('11111111-1111-1111-1111-111111111111', 'equilibrium', 'noun', 'สมดุล', 'A state where all forces are balanced', 'The structure is in static equilibrium.', 'โครงสร้างอยู่ในสภาวะสมดุลสถิต', 18),
('11111111-1111-1111-1111-111111111111', 'temperature', 'noun', 'อุณหภูมิ', 'A measure of the average kinetic energy of particles', 'The operating temperature of the machine is 120°C.', 'อุณหภูมิทำงานของเครื่องจักรคือ 120 องศาเซลเซียส', 19),
('11111111-1111-1111-1111-111111111111', 'mass', 'noun', 'มวล', 'The quantity of matter in an object', 'The mass of the component is 2.5 kilograms.', 'มวลของชิ้นส่วนคือ 2.5 กิโลกรัม', 20),
('11111111-1111-1111-1111-111111111111', 'gravity', 'noun', 'แรงโน้มถ่วง', 'The force of attraction between masses', 'Gravity pulls objects toward the center of the Earth.', 'แรงโน้มถ่วงดึงดูดวัตถุเข้าสู่ศูนย์กลางโลก', 21),
('11111111-1111-1111-1111-111111111111', 'displacement', 'noun', 'การกระจัด', 'The change in position of an object', 'The displacement of the piston is 500 cc.', 'ปริมาตรกระบอกสูบ (การกระจัด) ของลูกสูบคือ 500 ซีซี', 22),
('11111111-1111-1111-1111-111111111111', 'frequency', 'noun', 'ความถี่', 'The number of cycles per unit of time', 'The frequency of the AC power supply is 50 Hz.', 'ความถี่ของแหล่งจ่ายไฟ AC คือ 50 เฮิรตซ์', 23),
('11111111-1111-1111-1111-111111111111', 'wavelength', 'noun', 'ความยาวคลื่น', 'The distance between successive peaks of a wave', 'The wavelength of visible light ranges from 380 to 700 nm.', 'ความยาวคลื่นของแสงที่มองเห็นได้อยู่ในช่วง 380 ถึง 700 นาโนเมตร', 24),
('11111111-1111-1111-1111-111111111111', 'amplitude', 'noun', 'แอมพลิจูด', 'The maximum displacement from the rest position', 'The amplitude of the vibration decreased over time.', 'แอมพลิจูดของการสั่นลดลงตามเวลา', 25),
('11111111-1111-1111-1111-111111111111', 'calibrate', 'verb', 'สอบเทียบ', 'To adjust and verify the accuracy of an instrument', 'Engineers calibrate the sensors before every test.', 'วิศวกรสอบเทียบเซ็นเซอร์ก่อนการทดสอบทุกครั้ง', 26),
('11111111-1111-1111-1111-111111111111', 'dimension', 'noun', 'มิติ / ขนาด', 'A measurable extent such as length, width, or height', 'Check the dimensions of the part before assembly.', 'ตรวจสอบขนาดของชิ้นส่วนก่อนการประกอบ', 27),
('11111111-1111-1111-1111-111111111111', 'tolerance', 'noun', 'ค่าความคลาดเคลื่อนที่ยอมรับได้', 'The permissible variation in a measurement', 'The tolerance for this shaft is ±0.01 mm.', 'ค่าความคลาดเคลื่อนที่ยอมรับได้ของเพลานี้คือ ±0.01 มม.', 28),
('11111111-1111-1111-1111-111111111111', 'prototype', 'noun', 'ต้นแบบ', 'An early sample built to test a concept', 'We built a prototype to validate the design.', 'เราสร้างต้นแบบเพื่อตรวจสอบความถูกต้องของการออกแบบ', 29),
('11111111-1111-1111-1111-111111111111', 'optimize', 'verb', 'ปรับให้เหมาะสม', 'To make something as effective as possible', 'We need to optimize the design to reduce weight.', 'เราต้องปรับการออกแบบให้เหมาะสมเพื่อลดน้ำหนัก', 30);

-- ===== SET 2: Mechanical Engineering (Medium) =====
INSERT INTO vocabulary_sets (id, title, description, language_pair, difficulty, category, icon_url, word_count)
VALUES (
  '22222222-2222-2222-2222-222222222222',
  'Mechanical Engineering',
  'คำศัพท์เฉพาะทางวิศวกรรมเครื่องกล',
  'en-th', 'medium', 'mechanical', '🔧', 30
);

INSERT INTO vocabularies (set_id, word, part_of_speech, meaning_th, meaning_en, example_en, example_th, order_index) VALUES
('22222222-2222-2222-2222-222222222222', 'turbine', 'noun', 'กังหัน', 'A rotary engine driven by fluid flow', 'The gas turbine generates 100 MW of power.', 'กังหันก๊าซผลิตกำลังไฟฟ้า 100 เมกะวัตต์', 1),
('22222222-2222-2222-2222-222222222222', 'piston', 'noun', 'ลูกสูบ', 'A component that moves up and down in a cylinder', 'The piston converts pressure into linear motion.', 'ลูกสูบแปลงความดันเป็นการเคลื่อนที่เชิงเส้น', 2),
('22222222-2222-2222-2222-222222222222', 'crankshaft', 'noun', 'เพลาข้อเหวี่ยง', 'A shaft driven by pistons to produce rotation', 'The crankshaft converts reciprocating motion to rotary motion.', 'เพลาข้อเหวี่ยงแปลงการเคลื่อนที่แบบลูกสูบเป็นการหมุน', 3),
('22222222-2222-2222-2222-222222222222', 'bearing', 'noun', 'แบริ่ง / ตลับลูกปืน', 'A device that reduces friction between moving parts', 'Ball bearings are used to support the rotating shaft.', 'ตลับลูกปืนใช้รองรับเพลาหมุน', 4),
('22222222-2222-2222-2222-222222222222', 'gear', 'noun', 'เฟือง', 'A toothed wheel that transmits torque', 'The gear ratio determines the output speed.', 'อัตราทดเฟืองกำหนดความเร็วขาออก', 5),
('22222222-2222-2222-2222-222222222222', 'welding', 'noun', 'การเชื่อม', 'Joining materials by melting and fusing them', 'MIG welding is commonly used in automotive manufacturing.', 'การเชื่อม MIG ใช้กันทั่วไปในการผลิตยานยนต์', 6),
('22222222-2222-2222-2222-222222222222', 'thermodynamics', 'noun', 'อุณหพลศาสตร์', 'The study of heat, energy, and work relationships', 'Thermodynamics governs the efficiency of heat engines.', 'อุณหพลศาสตร์ควบคุมประสิทธิภาพของเครื่องยนต์ความร้อน', 7),
('22222222-2222-2222-2222-222222222222', 'heat transfer', 'noun', 'การถ่ายเทความร้อน', 'The movement of thermal energy between systems', 'Heat transfer occurs through conduction, convection, and radiation.', 'การถ่ายเทความร้อนเกิดขึ้นผ่านการนำ การพา และการแผ่รังสี', 8),
('22222222-2222-2222-2222-222222222222', 'combustion', 'noun', 'การเผาไหม้', 'A chemical reaction producing heat and light', 'Internal combustion engines burn fuel inside cylinders.', 'เครื่องยนต์สันดาปภายในเผาไหม้เชื้อเพลิงภายในกระบอกสูบ', 9),
('22222222-2222-2222-2222-222222222222', 'lubrication', 'noun', 'การหล่อลื่น', 'Applying a substance to reduce friction', 'Proper lubrication extends the life of machinery.', 'การหล่อลื่นที่เหมาะสมยืดอายุการใช้งานของเครื่องจักร', 10),
('22222222-2222-2222-2222-222222222222', 'fatigue', 'noun', 'ความล้า (วัสดุ)', 'Weakening of material from repeated stress', 'Metal fatigue caused the wing to crack.', 'ความล้าของโลหะทำให้ปีกเกิดรอยแตก', 11),
('22222222-2222-2222-2222-222222222222', 'alloy', 'noun', 'โลหะผสม', 'A mixture of metals or a metal with other elements', 'Aluminum alloy is lightweight and strong.', 'โลหะผสมอะลูมิเนียมมีน้ำหนักเบาและแข็งแรง', 12),
('22222222-2222-2222-2222-222222222222', 'shaft', 'noun', 'เพลา', 'A rotating rod that transmits power', 'The drive shaft transfers torque from the engine to the wheels.', 'เพลาขับถ่ายทอดแรงบิดจากเครื่องยนต์ไปยังล้อ', 13),
('22222222-2222-2222-2222-222222222222', 'valve', 'noun', 'วาล์ว', 'A device that controls the flow of fluid', 'The safety valve releases pressure when it exceeds the limit.', 'วาล์วนิรภัยปล่อยความดันเมื่อเกินขีดจำกัด', 14),
('22222222-2222-2222-2222-222222222222', 'compressor', 'noun', 'คอมเพรสเซอร์', 'A device that increases gas pressure', 'The air compressor supplies pressurized air to pneumatic tools.', 'คอมเพรสเซอร์อากาศจ่ายลมอัดให้เครื่องมือนิวแมติก', 15),
('22222222-2222-2222-2222-222222222222', 'hydraulic', 'adjective', 'ไฮดรอลิก', 'Operated by pressurized liquid', 'Hydraulic systems are used in heavy construction equipment.', 'ระบบไฮดรอลิกใช้ในเครื่องจักรก่อสร้างขนาดใหญ่', 16),
('22222222-2222-2222-2222-222222222222', 'pneumatic', 'adjective', 'นิวแมติก', 'Operated by compressed air or gas', 'Pneumatic drills are commonly used in mining.', 'สว่านนิวแมติกใช้กันทั่วไปในงานเหมืองแร่', 17),
('22222222-2222-2222-2222-222222222222', 'coupling', 'noun', 'ข้อต่อ', 'A device connecting two shafts together', 'A flexible coupling absorbs misalignment between shafts.', 'ข้อต่อยืดหยุ่นดูดซับการเยื้องศูนย์ระหว่างเพลา', 18),
('22222222-2222-2222-2222-222222222222', 'flywheel', 'noun', 'ล้อช่วยแรง', 'A heavy rotating wheel that stores kinetic energy', 'The flywheel smooths out engine speed fluctuations.', 'ล้อช่วยแรงทำให้ความเร็วเครื่องยนต์สม่ำเสมอ', 19),
('22222222-2222-2222-2222-222222222222', 'nozzle', 'noun', 'หัวฉีด', 'A device for directing or controlling fluid flow', 'The fuel nozzle sprays a fine mist into the combustion chamber.', 'หัวฉีดเชื้อเพลิงพ่นละอองฝอยเข้าสู่ห้องเผาไหม้', 20),
('22222222-2222-2222-2222-222222222222', 'gasket', 'noun', 'ปะเก็น', 'A seal between two surfaces to prevent leaks', 'The head gasket prevents coolant from leaking.', 'ปะเก็นฝาสูบป้องกันน้ำหล่อเย็นรั่วไหล', 21),
('22222222-2222-2222-2222-222222222222', 'camshaft', 'noun', 'เพลาลูกเบี้ยว', 'A shaft with cams that operate valves', 'The camshaft controls the opening and closing of engine valves.', 'เพลาลูกเบี้ยวควบคุมการเปิดปิดวาล์วเครื่องยนต์', 22),
('22222222-2222-2222-2222-222222222222', 'coolant', 'noun', 'สารหล่อเย็น', 'A fluid used to reduce heat', 'The coolant circulates through the engine to prevent overheating.', 'สารหล่อเย็นหมุนเวียนผ่านเครื่องยนต์เพื่อป้องกันความร้อนเกิน', 23),
('22222222-2222-2222-2222-222222222222', 'lathe', 'noun', 'เครื่องกลึง', 'A machine for shaping material by rotation', 'The lathe is used to produce cylindrical parts.', 'เครื่องกลึงใช้ผลิตชิ้นส่วนทรงกระบอก', 24),
('22222222-2222-2222-2222-222222222222', 'milling', 'noun', 'การกัด (โลหะ)', 'Machining using rotary cutters to remove material', 'CNC milling produces parts with high precision.', 'การกัดด้วย CNC ผลิตชิ้นส่วนที่มีความแม่นยำสูง', 25),
('22222222-2222-2222-2222-222222222222', 'casting', 'noun', 'การหล่อ', 'Pouring liquid metal into a mold to form a shape', 'Sand casting is used for large metal components.', 'การหล่อทรายใช้สำหรับชิ้นส่วนโลหะขนาดใหญ่', 26),
('22222222-2222-2222-2222-222222222222', 'forging', 'noun', 'การตีขึ้นรูป', 'Shaping metal using compressive forces', 'Forging produces parts with superior strength.', 'การตีขึ้นรูปผลิตชิ้นส่วนที่มีความแข็งแรงเหนือกว่า', 27),
('22222222-2222-2222-2222-222222222222', 'spring', 'noun', 'สปริง', 'An elastic device that stores mechanical energy', 'The suspension spring absorbs road shocks.', 'สปริงระบบกันสะเทือนดูดซับแรงกระแทกจากถนน', 28),
('22222222-2222-2222-2222-222222222222', 'viscosity', 'noun', 'ความหนืด', 'A measure of a fluid resistance to flow', 'Engine oil viscosity affects fuel consumption.', 'ความหนืดของน้ำมันเครื่องมีผลต่อการสิ้นเปลืองเชื้อเพลิง', 29),
('22222222-2222-2222-2222-222222222222', 'actuator', 'noun', 'ตัวกระตุ้น / แอคชูเอเตอร์', 'A device that converts energy into motion', 'The linear actuator extends and retracts the robotic arm.', 'แอคชูเอเตอร์แบบเส้นตรงยืดและหดแขนหุ่นยนต์', 30);

-- ===== SET 3: Electrical Engineering (Medium) =====
INSERT INTO vocabulary_sets (id, title, description, language_pair, difficulty, category, icon_url, word_count)
VALUES (
  '33333333-3333-3333-3333-333333333333',
  'Electrical Engineering',
  'คำศัพท์เฉพาะทางวิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์',
  'en-th', 'medium', 'electrical', '⚡', 30
);

INSERT INTO vocabularies (set_id, word, part_of_speech, meaning_th, meaning_en, example_en, example_th, order_index) VALUES
('33333333-3333-3333-3333-333333333333', 'capacitor', 'noun', 'ตัวเก็บประจุ', 'A device that stores electrical energy in an electric field', 'The capacitor smooths out voltage fluctuations in the circuit.', 'ตัวเก็บประจุทำให้แรงดันไฟฟ้าในวงจรสม่ำเสมอ', 1),
('33333333-3333-3333-3333-333333333333', 'resistor', 'noun', 'ตัวต้านทาน', 'A component that limits the flow of current', 'A 10k ohm resistor is used to limit the LED current.', 'ตัวต้านทาน 10k โอห์มใช้จำกัดกระแสไฟฟ้า LED', 2),
('33333333-3333-3333-3333-333333333333', 'inductor', 'noun', 'ตัวเหนี่ยวนำ', 'A coil that stores energy in a magnetic field', 'The inductor opposes changes in current flow.', 'ตัวเหนี่ยวนำต้านการเปลี่ยนแปลงของกระแสไฟฟ้า', 3),
('33333333-3333-3333-3333-333333333333', 'transistor', 'noun', 'ทรานซิสเตอร์', 'A semiconductor device used to amplify or switch signals', 'Modern CPUs contain billions of transistors.', 'ซีพียูสมัยใหม่มีทรานซิสเตอร์หลายพันล้านตัว', 4),
('33333333-3333-3333-3333-333333333333', 'semiconductor', 'noun', 'สารกึ่งตัวนำ', 'A material with conductivity between a conductor and insulator', 'Silicon is the most common semiconductor material.', 'ซิลิคอนเป็นวัสดุสารกึ่งตัวนำที่ใช้กันมากที่สุด', 5),
('33333333-3333-3333-3333-333333333333', 'circuit', 'noun', 'วงจร', 'A closed path through which electric current flows', 'The circuit was designed using a PCB layout tool.', 'วงจรถูกออกแบบโดยใช้เครื่องมือจัดวาง PCB', 6),
('33333333-3333-3333-3333-333333333333', 'diode', 'noun', 'ไดโอด', 'A device that allows current to flow in one direction', 'The diode prevents reverse current flow in the circuit.', 'ไดโอดป้องกันกระแสไหลย้อนกลับในวงจร', 7),
('33333333-3333-3333-3333-333333333333', 'amplifier', 'noun', 'วงจรขยาย', 'A device that increases the strength of a signal', 'The audio amplifier boosts the signal to drive the speakers.', 'วงจรขยายเสียงเพิ่มสัญญาณเพื่อขับลำโพง', 8),
('33333333-3333-3333-3333-333333333333', 'transformer', 'noun', 'หม้อแปลงไฟฟ้า', 'A device that changes voltage levels', 'The step-down transformer reduces 220V to 12V.', 'หม้อแปลงแบบลดแรงดันลด 220V เป็น 12V', 9),
('33333333-3333-3333-3333-333333333333', 'impedance', 'noun', 'อิมพีแดนซ์', 'The total opposition to AC current flow', 'The impedance of the antenna must match the transmission line.', 'อิมพีแดนซ์ของเสาอากาศต้องตรงกับสายส่ง', 10),
('33333333-3333-3333-3333-333333333333', 'oscillator', 'noun', 'ออสซิลเลเตอร์', 'A circuit that generates a periodic signal', 'The crystal oscillator provides a stable clock frequency.', 'ออสซิลเลเตอร์คริสตัลให้ความถี่สัญญาณนาฬิกาที่เสถียร', 11),
('33333333-3333-3333-3333-333333333333', 'rectifier', 'noun', 'วงจรเรียงกระแส', 'A device that converts AC to DC', 'The bridge rectifier converts alternating current to direct current.', 'วงจรเรียงกระแสแบบบริดจ์แปลงกระแสสลับเป็นกระแสตรง', 12),
('33333333-3333-3333-3333-333333333333', 'relay', 'noun', 'รีเลย์', 'An electrically operated switch', 'The relay activates the motor when the sensor detects motion.', 'รีเลย์เปิดการทำงานมอเตอร์เมื่อเซ็นเซอร์ตรวจจับการเคลื่อนไหว', 13),
('33333333-3333-3333-3333-333333333333', 'insulator', 'noun', 'ฉนวน', 'A material that does not conduct electricity', 'Rubber is an excellent electrical insulator.', 'ยางเป็นฉนวนไฟฟ้าที่ยอดเยี่ยม', 14),
('33333333-3333-3333-3333-333333333333', 'conductor', 'noun', 'ตัวนำ', 'A material that allows electricity to flow', 'Copper is the most widely used electrical conductor.', 'ทองแดงเป็นตัวนำไฟฟ้าที่ใช้กันอย่างแพร่หลายที่สุด', 15),
('33333333-3333-3333-3333-333333333333', 'wattage', 'noun', 'กำลังวัตต์', 'The amount of electrical power in watts', 'Check the wattage rating before connecting the device.', 'ตรวจสอบกำลังวัตต์ก่อนเชื่อมต่ออุปกรณ์', 16),
('33333333-3333-3333-3333-333333333333', 'grounding', 'noun', 'การต่อสายดิน', 'Connecting a circuit to the earth for safety', 'Proper grounding protects equipment from electrical surges.', 'การต่อสายดินที่เหมาะสมปกป้องอุปกรณ์จากไฟกระชาก', 17),
('33333333-3333-3333-3333-333333333333', 'inverter', 'noun', 'อินเวอร์เตอร์', 'A device that converts DC to AC', 'The solar inverter converts DC from panels to AC for home use.', 'อินเวอร์เตอร์โซลาร์แปลง DC จากแผงเป็น AC สำหรับใช้ในบ้าน', 18),
('33333333-3333-3333-3333-333333333333', 'microcontroller', 'noun', 'ไมโครคอนโทรลเลอร์', 'A small computer on a single chip', 'The Arduino uses an ATmega microcontroller.', 'อาร์ดูโนใช้ไมโครคอนโทรลเลอร์ ATmega', 19),
('33333333-3333-3333-3333-333333333333', 'sensor', 'noun', 'เซ็นเซอร์', 'A device that detects physical properties', 'The temperature sensor monitors the CPU heat.', 'เซ็นเซอร์อุณหภูมิตรวจสอบความร้อนของ CPU', 20),
('33333333-3333-3333-3333-333333333333', 'photovoltaic', 'adjective', 'โฟโตวอลตาอิก', 'Converting light into electricity', 'Photovoltaic cells are the building blocks of solar panels.', 'เซลล์โฟโตวอลตาอิกเป็นส่วนประกอบหลักของแผงโซลาร์', 21),
('33333333-3333-3333-3333-333333333333', 'oscilloscope', 'noun', 'ออสซิลโลสโคป', 'An instrument for viewing electrical signals', 'Use the oscilloscope to measure the signal waveform.', 'ใช้ออสซิลโลสโคปวัดรูปคลื่นสัญญาณ', 22),
('33333333-3333-3333-3333-333333333333', 'solenoid', 'noun', 'โซลินอยด์', 'A coil of wire that acts as an electromagnet', 'The solenoid valve controls water flow in the irrigation system.', 'วาล์วโซลินอยด์ควบคุมการไหลของน้ำในระบบชลประทาน', 23),
('33333333-3333-3333-3333-333333333333', 'potentiometer', 'noun', 'โพเทนชิโอมิเตอร์', 'A variable resistor with three terminals', 'Turn the potentiometer to adjust the volume.', 'หมุนโพเทนชิโอมิเตอร์เพื่อปรับระดับเสียง', 24),
('33333333-3333-3333-3333-333333333333', 'fuse', 'noun', 'ฟิวส์', 'A safety device that breaks the circuit on overload', 'The fuse blew because of a short circuit.', 'ฟิวส์ขาดเนื่องจากวงจรลัดวงจร', 25),
('33333333-3333-3333-3333-333333333333', 'LED', 'noun', 'แอลอีดี', 'Light Emitting Diode — a small efficient light source', 'The LED indicator shows the device is powered on.', 'ไฟ LED แสดงว่าอุปกรณ์เปิดอยู่', 26),
('33333333-3333-3333-3333-333333333333', 'PCB', 'noun', 'แผงวงจรพิมพ์', 'Printed Circuit Board — a board connecting electronic components', 'The PCB was designed using KiCad software.', 'แผงวงจรพิมพ์ออกแบบด้วยซอฟต์แวร์ KiCad', 27),
('33333333-3333-3333-3333-333333333333', 'soldering', 'noun', 'การบัดกรี', 'Joining components using melted solder', 'Soldering requires a steady hand and proper temperature.', 'การบัดกรีต้องใช้มือที่นิ่งและอุณหภูมิที่เหมาะสม', 28),
('33333333-3333-3333-3333-333333333333', 'bandwidth', 'noun', 'แบนด์วิดท์', 'The range of frequencies a system can handle', 'The bandwidth of the communication channel is 100 MHz.', 'แบนด์วิดท์ของช่องสื่อสารคือ 100 เมกะเฮิรตซ์', 29),
('33333333-3333-3333-3333-333333333333', 'firmware', 'noun', 'เฟิร์มแวร์', 'Software permanently programmed into hardware', 'Update the firmware to fix the connectivity bug.', 'อัพเดทเฟิร์มแวร์เพื่อแก้ไขบั๊กการเชื่อมต่อ', 30);

-- ===== SET 4: Civil Engineering (Medium) =====
INSERT INTO vocabulary_sets (id, title, description, language_pair, difficulty, category, icon_url, word_count)
VALUES (
  '44444444-4444-4444-4444-444444444444',
  'Civil Engineering',
  'คำศัพท์เฉพาะทางวิศวกรรมโยธาและการก่อสร้าง',
  'en-th', 'medium', 'civil', '🏗️', 30
);

INSERT INTO vocabularies (set_id, word, part_of_speech, meaning_th, meaning_en, example_en, example_th, order_index) VALUES
('44444444-4444-4444-4444-444444444444', 'foundation', 'noun', 'ฐานราก', 'The base structure that supports a building', 'A deep foundation is required for skyscrapers.', 'ฐานรากลึกจำเป็นสำหรับอาคารสูง', 1),
('44444444-4444-4444-4444-444444444444', 'concrete', 'noun', 'คอนกรีต', 'A building material made of cement, water, and aggregates', 'Reinforced concrete is used in most modern buildings.', 'คอนกรีตเสริมเหล็กใช้ในอาคารสมัยใหม่ส่วนใหญ่', 2),
('44444444-4444-4444-4444-444444444444', 'reinforcement', 'noun', 'เหล็กเสริม', 'Steel bars embedded in concrete for strength', 'The reinforcement must be placed before pouring concrete.', 'ต้องวางเหล็กเสริมก่อนเทคอนกรีต', 3),
('44444444-4444-4444-4444-444444444444', 'beam', 'noun', 'คาน', 'A horizontal structural member that bears loads', 'The steel beam spans 12 meters across the room.', 'คานเหล็กพาดยาว 12 เมตรข้ามห้อง', 4),
('44444444-4444-4444-4444-444444444444', 'column', 'noun', 'เสา', 'A vertical structural member that supports loads', 'Each column supports a load of 200 tons.', 'เสาแต่ละต้นรับน้ำหนัก 200 ตัน', 5),
('44444444-4444-4444-4444-444444444444', 'truss', 'noun', 'โครงถัก', 'A framework of beams forming triangular units', 'The roof truss distributes the weight evenly.', 'โครงถักหลังคากระจายน้ำหนักอย่างสม่ำเสมอ', 6),
('44444444-4444-4444-4444-444444444444', 'soil mechanics', 'noun', 'ปฐพีกลศาสตร์', 'The study of soil behavior under loads', 'Soil mechanics determines the bearing capacity of the ground.', 'ปฐพีกลศาสตร์กำหนดกำลังรับน้ำหนักของพื้นดิน', 7),
('44444444-4444-4444-4444-444444444444', 'aggregate', 'noun', 'มวลรวม', 'Granular material used in concrete', 'Coarse aggregate provides strength to the concrete mix.', 'มวลรวมหยาบให้ความแข็งแรงแก่ส่วนผสมคอนกรีต', 8),
('44444444-4444-4444-4444-444444444444', 'surveying', 'noun', 'การสำรวจ', 'Measuring and mapping land and structures', 'Surveying is the first step in any construction project.', 'การสำรวจเป็นขั้นตอนแรกในโครงการก่อสร้างใดๆ', 9),
('44444444-4444-4444-4444-444444444444', 'blueprint', 'noun', 'แบบพิมพ์เขียว', 'A detailed technical drawing of a structure', 'The architect reviewed the blueprint before construction began.', 'สถาปนิกตรวจสอบแบบพิมพ์เขียวก่อนเริ่มก่อสร้าง', 10),
('44444444-4444-4444-4444-444444444444', 'excavation', 'noun', 'การขุดดิน', 'The process of digging and removing earth', 'Excavation for the basement took two weeks.', 'การขุดดินสำหรับชั้นใต้ดินใช้เวลาสองสัปดาห์', 11),
('44444444-4444-4444-4444-444444444444', 'slab', 'noun', 'แผ่นพื้น', 'A flat piece of concrete forming a floor or roof', 'The concrete slab is 200 mm thick.', 'แผ่นพื้นคอนกรีตหนา 200 มิลลิเมตร', 12),
('44444444-4444-4444-4444-444444444444', 'pile', 'noun', 'เสาเข็ม', 'A long post driven into the ground for support', 'Concrete piles were driven 20 meters deep.', 'เสาเข็มคอนกรีตถูกตอกลึก 20 เมตร', 13),
('44444444-4444-4444-4444-444444444444', 'retaining wall', 'noun', 'กำแพงกันดิน', 'A wall built to hold back soil', 'The retaining wall prevents the hillside from sliding.', 'กำแพงกันดินป้องกันเนินเขาจากการเลื่อนตัว', 14),
('44444444-4444-4444-4444-444444444444', 'drainage', 'noun', 'การระบายน้ำ', 'A system for removing excess water', 'Good drainage prevents flooding during heavy rain.', 'การระบายน้ำที่ดีป้องกันน้ำท่วมในช่วงฝนตกหนัก', 15),
('44444444-4444-4444-4444-444444444444', 'asphalt', 'noun', 'ยางมะตอย', 'A material used for paving roads', 'The asphalt road surface was repaved last month.', 'ผิวถนนยางมะตอยถูกปูใหม่เมื่อเดือนที่แล้ว', 16),
('44444444-4444-4444-4444-444444444444', 'formwork', 'noun', 'แบบหล่อ', 'Temporary molds for pouring concrete', 'Remove the formwork after the concrete has cured.', 'ถอดแบบหล่อหลังจากคอนกรีตแข็งตัวแล้ว', 17),
('44444444-4444-4444-4444-444444444444', 'curing', 'noun', 'การบ่ม', 'Maintaining moisture for concrete to gain strength', 'Proper curing takes at least 7 days.', 'การบ่มที่เหมาะสมใช้เวลาอย่างน้อย 7 วัน', 18),
('44444444-4444-4444-4444-444444444444', 'grading', 'noun', 'การปรับระดับ', 'Leveling the ground surface', 'Grading ensures proper water runoff from the site.', 'การปรับระดับช่วยให้น้ำไหลออกจากพื้นที่ได้อย่างเหมาะสม', 19),
('44444444-4444-4444-4444-444444444444', 'span', 'noun', 'ช่วง (ของสะพาน/คาน)', 'The distance between two structural supports', 'The bridge has a main span of 500 meters.', 'สะพานมีช่วงหลักยาว 500 เมตร', 20),
('44444444-4444-4444-4444-444444444444', 'scaffold', 'noun', 'นั่งร้าน', 'A temporary framework for workers at height', 'Workers must wear safety harnesses on the scaffold.', 'คนงานต้องสวมสายรัดนิรภัยบนนั่งร้าน', 21),
('44444444-4444-4444-4444-444444444444', 'precast', 'adjective', 'หล่อสำเร็จ', 'Concrete cast in a factory before installation', 'Precast panels reduce on-site construction time.', 'แผ่นหล่อสำเร็จลดเวลาก่อสร้างในพื้นที่', 22),
('44444444-4444-4444-4444-444444444444', 'mortar', 'noun', 'ปูน / มอร์ตาร์', 'A mixture for binding bricks or stones', 'Apply mortar between each layer of bricks.', 'ทามอร์ตาร์ระหว่างอิฐแต่ละชั้น', 23),
('44444444-4444-4444-4444-444444444444', 'compaction', 'noun', 'การบดอัด', 'Pressing soil to increase its density', 'Soil compaction is essential before laying the foundation.', 'การบดอัดดินเป็นสิ่งจำเป็นก่อนวางฐานราก', 24),
('44444444-4444-4444-4444-444444444444', 'load-bearing', 'adjective', 'รับน้ำหนัก', 'Capable of supporting structural weight', 'Do not remove load-bearing walls without consulting an engineer.', 'อย่ารื้อผนังรับน้ำหนักโดยไม่ปรึกษาวิศวกร', 25),
('44444444-4444-4444-4444-444444444444', 'elevation', 'noun', 'แบบรูปด้าน', 'A drawing showing the front or side view of a structure', 'The front elevation shows the building entrance design.', 'แบบรูปด้านหน้าแสดงการออกแบบทางเข้าอาคาร', 26),
('44444444-4444-4444-4444-444444444444', 'waterproofing', 'noun', 'การกันซึม', 'Making a structure resistant to water penetration', 'Waterproofing the basement prevents moisture damage.', 'การกันซึมชั้นใต้ดินป้องกันความเสียหายจากความชื้น', 27),
('44444444-4444-4444-4444-444444444444', 'rebar', 'noun', 'เหล็กเส้น', 'Steel reinforcing bars used in concrete', 'The rebar grid was tied together before the concrete pour.', 'ตะแกรงเหล็กเส้นถูกมัดเข้าด้วยกันก่อนเทคอนกรีต', 28),
('44444444-4444-4444-4444-444444444444', 'deflection', 'noun', 'การแอ่นตัว', 'The degree to which a structural element bends', 'The beam deflection must not exceed the allowable limit.', 'การแอ่นตัวของคานต้องไม่เกินขีดจำกัดที่อนุญาต', 29),
('44444444-4444-4444-4444-444444444444', 'subgrade', 'noun', 'ชั้นดินเดิม', 'The native soil beneath a constructed road or foundation', 'Test the subgrade before starting the pavement work.', 'ทดสอบชั้นดินเดิมก่อนเริ่มงานปูผิวทาง', 30);

-- ===== SET 5: Computer Engineering (Medium) =====
INSERT INTO vocabulary_sets (id, title, description, language_pair, difficulty, category, icon_url, word_count)
VALUES (
  '55555555-5555-5555-5555-555555555555',
  'Computer Engineering',
  'คำศัพท์เฉพาะทางวิศวกรรมคอมพิวเตอร์และซอฟต์แวร์',
  'en-th', 'medium', 'computer', '💻', 30
);

INSERT INTO vocabularies (set_id, word, part_of_speech, meaning_th, meaning_en, example_en, example_th, order_index) VALUES
('55555555-5555-5555-5555-555555555555', 'algorithm', 'noun', 'อัลกอริทึม', 'A step-by-step procedure for solving a problem', 'The sorting algorithm runs in O(n log n) time.', 'อัลกอริทึมการเรียงลำดับทำงานในเวลา O(n log n)', 1),
('55555555-5555-5555-5555-555555555555', 'compiler', 'noun', 'คอมไพเลอร์', 'A program that translates source code into machine code', 'The compiler detected a syntax error on line 42.', 'คอมไพเลอร์ตรวจพบข้อผิดพลาดทางไวยากรณ์ในบรรทัดที่ 42', 2),
('55555555-5555-5555-5555-555555555555', 'middleware', 'noun', 'มิดเดิลแวร์', 'Software that connects different applications together', 'The middleware handles authentication between services.', 'มิดเดิลแวร์จัดการการยืนยันตัวตนระหว่างบริการ', 3),
('55555555-5555-5555-5555-555555555555', 'API', 'noun', 'เอพีไอ', 'Application Programming Interface — a set of rules for software interaction', 'The REST API returns data in JSON format.', 'REST API ส่งกลับข้อมูลในรูปแบบ JSON', 4),
('55555555-5555-5555-5555-555555555555', 'protocol', 'noun', 'โปรโตคอล', 'A set of rules governing data communication', 'HTTP is the protocol used for web communication.', 'HTTP เป็นโปรโตคอลที่ใช้สำหรับการสื่อสารบนเว็บ', 5),
('55555555-5555-5555-5555-555555555555', 'latency', 'noun', 'เวลาแฝง', 'The delay before data transfer begins', 'Low latency is critical for real-time gaming.', 'เวลาแฝงต่ำมีความสำคัญสำหรับเกมแบบเรียลไทม์', 6),
('55555555-5555-5555-5555-555555555555', 'throughput', 'noun', 'ปริมาณงานต่อหน่วยเวลา', 'The amount of data processed in a given time', 'The server throughput is 10,000 requests per second.', 'ปริมาณงานของเซิร์ฟเวอร์คือ 10,000 คำขอต่อวินาที', 7),
('55555555-5555-5555-5555-555555555555', 'cache', 'noun', 'แคช', 'A high-speed storage layer for frequently accessed data', 'The cache reduces database query time significantly.', 'แคชลดเวลาสืบค้นฐานข้อมูลลงอย่างมาก', 8),
('55555555-5555-5555-5555-555555555555', 'thread', 'noun', 'เธรด', 'A unit of execution within a process', 'Multi-threading allows parallel task execution.', 'มัลติเธรดอนุญาตให้ทำงานหลายอย่างพร้อมกัน', 9),
('55555555-5555-5555-5555-555555555555', 'encryption', 'noun', 'การเข้ารหัส', 'Converting data into a secure encoded format', 'AES-256 encryption protects sensitive user data.', 'การเข้ารหัส AES-256 ปกป้องข้อมูลผู้ใช้ที่ละเอียดอ่อน', 10),
('55555555-5555-5555-5555-555555555555', 'debugging', 'noun', 'การดีบัก', 'Finding and fixing errors in code', 'Debugging revealed a null pointer exception.', 'การดีบักเผยให้เห็นข้อยกเว้น null pointer', 11),
('55555555-5555-5555-5555-555555555555', 'repository', 'noun', 'คลัง / รีโพซิทอรี', 'A storage location for code and version history', 'Push your changes to the remote repository.', 'พุชการเปลี่ยนแปลงของคุณไปยังรีโพซิทอรีระยะไกล', 12),
('55555555-5555-5555-5555-555555555555', 'deployment', 'noun', 'การปรับใช้งาน', 'Releasing software to a production environment', 'The deployment was automated using CI/CD pipeline.', 'การปรับใช้งานถูกทำให้อัตโนมัติโดยใช้ CI/CD pipeline', 13),
('55555555-5555-5555-5555-555555555555', 'scalability', 'noun', 'ความสามารถในการขยายตัว', 'The ability of a system to handle increased load', 'Cloud services provide excellent scalability.', 'บริการคลาวด์ให้ความสามารถในการขยายตัวที่ยอดเยี่ยม', 14),
('55555555-5555-5555-5555-555555555555', 'recursion', 'noun', 'การเรียกซ้ำ', 'A function that calls itself to solve a problem', 'Recursion is used to traverse tree data structures.', 'การเรียกซ้ำใช้ในการท่องโครงสร้างข้อมูลแบบต้นไม้', 15),
('55555555-5555-5555-5555-555555555555', 'database', 'noun', 'ฐานข้อมูล', 'An organized collection of structured data', 'The database stores millions of user records.', 'ฐานข้อมูลจัดเก็บบันทึกผู้ใช้หลายล้านรายการ', 16),
('55555555-5555-5555-5555-555555555555', 'framework', 'noun', 'เฟรมเวิร์ก', 'A platform providing reusable code structure', 'React is a popular frontend framework.', 'React เป็นเฟรมเวิร์กฝั่งหน้าที่นิยม', 17),
('55555555-5555-5555-5555-555555555555', 'kernel', 'noun', 'เคอร์เนล', 'The core of an operating system', 'The Linux kernel manages hardware resources.', 'เคอร์เนล Linux จัดการทรัพยากรฮาร์ดแวร์', 18),
('55555555-5555-5555-5555-555555555555', 'virtualization', 'noun', 'เวอร์ช่วลไลเซชัน', 'Creating virtual versions of hardware resources', 'Virtualization allows running multiple OS on one machine.', 'เวอร์ช่วลไลเซชันช่วยให้รันหลาย OS บนเครื่องเดียว', 19),
('55555555-5555-5555-5555-555555555555', 'containerization', 'noun', 'คอนเทนเนอร์ไรเซชัน', 'Packaging applications with their dependencies', 'Docker containerization simplifies deployment.', 'คอนเทนเนอร์ไรเซชันด้วย Docker ทำให้การปรับใช้งานง่ายขึ้น', 20),
('55555555-5555-5555-5555-555555555555', 'microservices', 'noun', 'ไมโครเซอร์วิส', 'An architecture of small independent services', 'Each microservice handles a specific business function.', 'ไมโครเซอร์วิสแต่ละตัวจัดการฟังก์ชันธุรกิจเฉพาะ', 21),
('55555555-5555-5555-5555-555555555555', 'authentication', 'noun', 'การยืนยันตัวตน', 'Verifying the identity of a user', 'Two-factor authentication adds an extra layer of security.', 'การยืนยันตัวตนสองปัจจัยเพิ่มชั้นความปลอดภัย', 22),
('55555555-5555-5555-5555-555555555555', 'authorization', 'noun', 'การอนุญาต', 'Granting access rights to resources', 'Role-based authorization controls user permissions.', 'การอนุญาตตามบทบาทควบคุมสิทธิ์ผู้ใช้', 23),
('55555555-5555-5555-5555-555555555555', 'refactoring', 'noun', 'การรีแฟกเตอร์', 'Restructuring code without changing its behavior', 'Refactoring improved the readability of the codebase.', 'การรีแฟกเตอร์ปรับปรุงความอ่านง่ายของโค้ดเบส', 24),
('55555555-5555-5555-5555-555555555555', 'iteration', 'noun', 'การวนซ้ำ', 'Repeating a process or set of instructions', 'Each iteration of the loop processes one data item.', 'การวนซ้ำแต่ละรอบประมวลผลข้อมูลหนึ่งรายการ', 25),
('55555555-5555-5555-5555-555555555555', 'abstraction', 'noun', 'การนามธรรม', 'Hiding complex details behind a simple interface', 'Abstraction lets developers focus on high-level logic.', 'การนามธรรมช่วยให้นักพัฒนาโฟกัสที่ตรรกะระดับสูง', 26),
('55555555-5555-5555-5555-555555555555', 'inheritance', 'noun', 'การสืบทอด', 'A class receiving properties from another class', 'Inheritance reduces code duplication in OOP.', 'การสืบทอดลดความซ้ำซ้อนของโค้ดใน OOP', 27),
('55555555-5555-5555-5555-555555555555', 'polymorphism', 'noun', 'พหุสัณฐาน', 'Using a single interface for different data types', 'Polymorphism allows one method to work with different objects.', 'พหุสัณฐานช่วยให้เมธอดเดียวทำงานกับอ็อบเจกต์ต่างๆ ได้', 28),
('55555555-5555-5555-5555-555555555555', 'concurrency', 'noun', 'การทำงานพร้อมกัน', 'Handling multiple tasks at the same time', 'Concurrency issues can cause race conditions.', 'ปัญหาการทำงานพร้อมกันอาจทำให้เกิด race condition', 29),
('55555555-5555-5555-5555-555555555555', 'payload', 'noun', 'เพย์โหลด', 'The actual data transmitted in a message', 'The JSON payload contains the user information.', 'เพย์โหลด JSON ประกอบด้วยข้อมูลผู้ใช้', 30);

-- ===== SET 6: Advanced Engineering (Hard, EN-EN) =====
INSERT INTO vocabulary_sets (id, title, description, language_pair, difficulty, category, icon_url, word_count)
VALUES (
  '66666666-6666-6666-6666-666666666666',
  'Advanced Engineering',
  'คำศัพท์วิศวกรรมขั้นสูง อธิบายเป็นภาษาอังกฤษ',
  'en-en', 'hard', 'general', '🎓', 30
);

INSERT INTO vocabularies (set_id, word, part_of_speech, meaning_th, meaning_en, example_en, example_th, order_index) VALUES
('66666666-6666-6666-6666-666666666666', 'eigenvalue', 'noun', 'ค่าลักษณะเฉพาะ', 'A scalar associated with a linear transformation of a vector space', 'The eigenvalues of the matrix determine the system stability.', 'ค่าลักษณะเฉพาะของเมทริกซ์กำหนดเสถียรภาพของระบบ', 1),
('66666666-6666-6666-6666-666666666666', 'Fourier transform', 'noun', 'การแปลงฟูเรียร์', 'A mathematical transform decomposing functions into frequencies', 'The Fourier transform reveals the frequency spectrum of the signal.', 'การแปลงฟูเรียร์เผยให้เห็นสเปกตรัมความถี่ของสัญญาณ', 2),
('66666666-6666-6666-6666-666666666666', 'Laplacian', 'noun', 'ลาปลาเชียน', 'A differential operator giving the divergence of the gradient', 'The Laplacian is used in heat equation modeling.', 'ลาปลาเชียนใช้ในการสร้างแบบจำลองสมการความร้อน', 3),
('66666666-6666-6666-6666-666666666666', 'Reynolds number', 'noun', 'เลขเรย์โนลด์', 'A dimensionless number predicting flow patterns', 'A Reynolds number above 4000 indicates turbulent flow.', 'เลขเรย์โนลด์ที่มากกว่า 4000 บ่งชี้การไหลแบบปั่นป่วน', 4),
('66666666-6666-6666-6666-666666666666', 'finite element', 'noun', 'ไฟไนต์เอลิเมนต์', 'A numerical method for solving differential equations', 'Finite element analysis predicted the stress distribution.', 'การวิเคราะห์ไฟไนต์เอลิเมนต์ทำนายการกระจายตัวของความเค้น', 5),
('66666666-6666-6666-6666-666666666666', 'anisotropic', 'adjective', 'แอนไอโซทรอปิก', 'Having properties that vary with direction', 'Carbon fiber is an anisotropic material.', 'คาร์บอนไฟเบอร์เป็นวัสดุแอนไอโซทรอปิก', 6),
('66666666-6666-6666-6666-666666666666', 'hysteresis', 'noun', 'ฮิสเทอรีซิส', 'The dependence of output on past input history', 'Magnetic hysteresis causes energy loss in transformers.', 'ฮิสเทอรีซิสแม่เหล็กทำให้เกิดการสูญเสียพลังงานในหม้อแปลง', 7),
('66666666-6666-6666-6666-666666666666', 'turbulence', 'noun', 'ความปั่นป่วน', 'Chaotic and irregular fluid motion', 'Turbulence increases drag on aircraft surfaces.', 'ความปั่นป่วนเพิ่มแรงต้านบนผิวอากาศยาน', 8),
('66666666-6666-6666-6666-666666666666', 'stochastic', 'adjective', 'สโตแคสติก', 'Involving random probability or processes', 'Stochastic models are used in reliability engineering.', 'แบบจำลองสโตแคสติกใช้ในวิศวกรรมความน่าเชื่อถือ', 9),
('66666666-6666-6666-6666-666666666666', 'entropy', 'noun', 'เอนโทรปี', 'A measure of disorder or randomness in a system', 'Entropy always increases in an isolated system.', 'เอนโทรปีเพิ่มขึ้นเสมอในระบบปิด', 10),
('66666666-6666-6666-6666-666666666666', 'superposition', 'noun', 'การซ้อนทับ', 'The principle that combined effects equal the sum of individual effects', 'The superposition principle simplifies circuit analysis.', 'หลักการซ้อนทับทำให้การวิเคราะห์วงจรง่ายขึ้น', 11),
('66666666-6666-6666-6666-666666666666', 'resonance', 'noun', 'การสั่นพ้อง', 'Vibration amplification at a natural frequency', 'Resonance can cause catastrophic structural failure.', 'การสั่นพ้องสามารถทำให้โครงสร้างพังทลายอย่างรุนแรง', 12),
('66666666-6666-6666-6666-666666666666', 'convolution', 'noun', 'การม้วนรวม', 'A mathematical operation combining two functions', 'Convolution is used in image processing filters.', 'การม้วนรวมใช้ในตัวกรองประมวลผลภาพ', 13),
('66666666-6666-6666-6666-666666666666', 'isothermal', 'adjective', 'ไอโซเทอร์มอล', 'Occurring at constant temperature', 'An isothermal process maintains the same temperature throughout.', 'กระบวนการไอโซเทอร์มอลรักษาอุณหภูมิเท่าเดิมตลอด', 14),
('66666666-6666-6666-6666-666666666666', 'adiabatic', 'adjective', 'อะเดียแบติก', 'Occurring without heat exchange with surroundings', 'Adiabatic compression increases the gas temperature.', 'การอัดแบบอะเดียแบติกเพิ่มอุณหภูมิของก๊าซ', 15),
('66666666-6666-6666-6666-666666666666', 'Navier-Stokes', 'noun', 'นาเวียร์-สโตกส์', 'Equations describing the motion of viscous fluids', 'Solving Navier-Stokes equations is one of the millennium problems.', 'การแก้สมการนาเวียร์-สโตกส์เป็นหนึ่งในปัญหาแห่งสหัสวรรษ', 16),
('66666666-6666-6666-6666-666666666666', 'damping', 'noun', 'การหน่วง', 'The reduction of oscillation amplitude over time', 'Damping ratio determines how quickly vibrations decay.', 'อัตราส่วนการหน่วงกำหนดว่าการสั่นลดลงเร็วแค่ไหน', 17),
('66666666-6666-6666-6666-666666666666', 'tensile strength', 'noun', 'กำลังดึง', 'The maximum stress a material can withstand when stretched', 'The tensile strength of steel is about 400 MPa.', 'กำลังดึงของเหล็กกล้าประมาณ 400 เมกะปาสกาล', 18),
('66666666-6666-6666-6666-666666666666', 'yield point', 'noun', 'จุดคราก', 'The stress level at which permanent deformation begins', 'Beyond the yield point the material deforms permanently.', 'เมื่อเกินจุดครากวัสดุจะเปลี่ยนรูปอย่างถาวร', 19),
('66666666-6666-6666-6666-666666666666', 'Poisson ratio', 'noun', 'อัตราส่วนปัวซอง', 'The ratio of lateral to axial strain', 'The Poisson ratio for steel is approximately 0.3.', 'อัตราส่วนปัวซองของเหล็กกล้าประมาณ 0.3', 20),
('66666666-6666-6666-6666-666666666666', 'Young modulus', 'noun', 'โมดูลัสยัง', 'A measure of material stiffness', 'The Young modulus of aluminum is 69 GPa.', 'โมดูลัสยังของอะลูมิเนียมคือ 69 กิกะปาสกาล', 21),
('66666666-6666-6666-6666-666666666666', 'Bernoulli principle', 'noun', 'หลักการเบอร์นูลลี', 'Increased fluid speed leads to decreased pressure', 'The Bernoulli principle explains how airplane wings generate lift.', 'หลักการเบอร์นูลลีอธิบายว่าปีกเครื่องบินสร้างแรงยกได้อย่างไร', 22),
('66666666-6666-6666-6666-666666666666', 'Mach number', 'noun', 'เลขมัค', 'The ratio of speed to the speed of sound', 'A Mach number greater than 1 means supersonic speed.', 'เลขมัคที่มากกว่า 1 หมายถึงความเร็วเหนือเสียง', 23),
('66666666-6666-6666-6666-666666666666', 'viscous flow', 'noun', 'การไหลแบบหนืด', 'Fluid flow dominated by viscous forces', 'Viscous flow occurs at low Reynolds numbers.', 'การไหลแบบหนืดเกิดขึ้นที่เลขเรย์โนลด์ต่ำ', 24),
('66666666-6666-6666-6666-666666666666', 'strain gauge', 'noun', 'สเตรนเกจ', 'A device measuring strain on an object', 'Strain gauges are bonded to the test specimen.', 'สเตรนเกจถูกติดกับชิ้นงานทดสอบ', 25),
('66666666-6666-6666-6666-666666666666', 'thermocouple', 'noun', 'เทอร์โมคัปเปิล', 'A sensor measuring temperature via voltage difference', 'The thermocouple measures temperatures up to 1200°C.', 'เทอร์โมคัปเปิลวัดอุณหภูมิได้ถึง 1200 องศาเซลเซียส', 26),
('66666666-6666-6666-6666-666666666666', 'PID controller', 'noun', 'ตัวควบคุม PID', 'A control loop using proportional, integral, and derivative terms', 'The PID controller maintains the motor speed at the setpoint.', 'ตัวควบคุม PID รักษาความเร็วมอเตอร์ที่จุดตั้งค่า', 27),
('66666666-6666-6666-6666-666666666666', 'transfer function', 'noun', 'ฟังก์ชันถ่ายโอน', 'A mathematical representation relating input to output', 'The transfer function describes the system frequency response.', 'ฟังก์ชันถ่ายโอนอธิบายการตอบสนองความถี่ของระบบ', 28),
('66666666-6666-6666-6666-666666666666', 'Bode plot', 'noun', 'โบดีพล็อต', 'A graph showing system frequency response', 'The Bode plot shows the gain margin of the system.', 'โบดีพล็อตแสดงมาร์จินอัตราขยายของระบบ', 29),
('66666666-6666-6666-6666-666666666666', 'Nyquist criterion', 'noun', 'เกณฑ์ไนควิสต์', 'A stability criterion based on frequency response', 'The Nyquist criterion determines closed-loop stability.', 'เกณฑ์ไนควิสต์กำหนดเสถียรภาพของลูปปิด', 30);

-- ===== INSERT SET STATS =====
INSERT INTO set_stats (set_id, likes, shares) VALUES
('11111111-1111-1111-1111-111111111111', 128, 45),
('22222222-2222-2222-2222-222222222222', 95, 32),
('33333333-3333-3333-3333-333333333333', 87, 28),
('44444444-4444-4444-4444-444444444444', 76, 22),
('55555555-5555-5555-5555-555555555555', 112, 41),
('66666666-6666-6666-6666-666666666666', 64, 18);
