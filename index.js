/* ============================================
   ELECTRON CONFIGURATION CALCULATOR
   Data-driven architecture — all 118 elements
   ============================================ */

// Element data: [symbol, name, number, fullConfig, abbreviatedConfig, category]
const elements = [
    ["H", "Hydrogen", 1, "1S¹", "", "nonmetal"],
    ["He", "Helium", 2, "1S²", "", "noble-gas"],
    ["Li", "Lithium", 3, "1S² / 2S¹", "[He] 2S¹", "alkali-metal"],
    ["Be", "Beryllium", 4, "1S² / 2S²", "[He] 2S²", "alkaline-earth"],
    ["B", "Boron", 5, "1S² / 2S² / 2P¹", "[He] 2S² 2P¹", "metalloid"],
    ["C", "Carbon", 6, "1S² / 2S² / 2P²", "[He] 2S² 2P²", "nonmetal"],
    ["N", "Nitrogen", 7, "1S² / 2S² / 2P³", "[He] 2S² 2P³", "nonmetal"],
    ["O", "Oxygen", 8, "1S² / 2S² / 2P⁴", "[He] 2S² 2P⁴", "nonmetal"],
    ["F", "Fluorine", 9, "1S² / 2S² / 2P⁵", "[He] 2S² 2P⁵", "halogen"],
    ["Ne", "Neon", 10, "1S² / 2S² / 2P⁶", "[He] 2S² 2P⁶", "noble-gas"],
    ["Na", "Sodium", 11, "1S² / 2S² / 2P⁶ / 3S¹", "[Ne] 3S¹", "alkali-metal"],
    ["Mg", "Magnesium", 12, "1S² / 2S² / 2P⁶ / 3S²", "[Ne] 3S²", "alkaline-earth"],
    ["Al", "Aluminum", 13, "1S² / 2S² / 2P⁶ / 3S² / 3P¹", "[Ne] 3S² 3P¹", "post-transition"],
    ["Si", "Silicon", 14, "1S² / 2S² / 2P⁶ / 3S² / 3P²", "[Ne] 3S² 3P²", "metalloid"],
    ["P", "Phosphorus", 15, "1S² / 2S² / 2P⁶ / 3S² / 3P³", "[Ne] 3S² 3P³", "nonmetal"],
    ["S", "Sulfur", 16, "1S² / 2S² / 2P⁶ / 3S² / 3P⁴", "[Ne] 3S² 3P⁴", "nonmetal"],
    ["Cl", "Chlorine", 17, "1S² / 2S² / 2P⁶ / 3S² / 3P⁵", "[Ne] 3S² 3P⁵", "halogen"],
    ["Ar", "Argon", 18, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶", "[Ne] 3S² 3P⁶", "noble-gas"],
    ["K", "Potassium", 19, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S¹", "[Ar] 4S¹", "alkali-metal"],
    ["Ca", "Calcium", 20, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S²", "[Ar] 4S²", "alkaline-earth"],
    ["Sc", "Scandium", 21, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹", "[Ar] 4S² 3d¹", "transition-metal"],
    ["Ti", "Titanium", 22, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d²", "[Ar] 4S² 3d²", "transition-metal"],
    ["V", "Vanadium", 23, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d³", "[Ar] 4S² 3d³", "transition-metal"],
    ["Cr", "Chromium", 24, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S¹ / 3d⁵", "[Ar] 4S¹ 3d⁵", "transition-metal"],
    ["Mn", "Manganese", 25, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d⁵", "[Ar] 4S² 3d⁵", "transition-metal"],
    ["Fe", "Iron", 26, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d⁶", "[Ar] 4S² 3d⁶", "transition-metal"],
    ["Co", "Cobalt", 27, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d⁷", "[Ar] 4S² 3d⁷", "transition-metal"],
    ["Ni", "Nickel", 28, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d⁸", "[Ar] 4S² 3d⁸", "transition-metal"],
    ["Cu", "Copper", 29, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S¹ / 3d¹⁰", "[Ar] 4S¹ 3d¹⁰", "transition-metal"],
    ["Zn", "Zinc", 30, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰", "[Ar] 4S² 3d¹⁰", "transition-metal"],
    ["Ga", "Gallium", 31, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P¹", "[Ar] 4S² 3d¹⁰ 4P¹", "post-transition"],
    ["Ge", "Germanium", 32, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P²", "[Ar] 4S² 3d¹⁰ 4P²", "metalloid"],
    ["As", "Arsenic", 33, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P³", "[Ar] 4S² 3d¹⁰ 4P³", "metalloid"],
    ["Se", "Selenium", 34, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁴", "[Ar] 4S² 3d¹⁰ 4P⁴", "nonmetal"],
    ["Br", "Bromine", 35, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁵", "[Ar] 4S² 3d¹⁰ 4P⁵", "halogen"],
    ["Kr", "Krypton", 36, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶", "[Ar] 4S² 3d¹⁰ 4P⁶", "noble-gas"],
    ["Rb", "Rubidium", 37, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S¹", "[Kr] 5S¹", "alkali-metal"],
    ["Sr", "Strontium", 38, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S²", "[Kr] 5S²", "alkaline-earth"],
    ["Y", "Yttrium", 39, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹", "[Kr] 5S² 4d¹", "transition-metal"],
    ["Zr", "Zirconium", 40, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d²", "[Kr] 5S² 4d²", "transition-metal"],
    ["Nb", "Niobium", 41, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S¹ / 4d⁴", "[Kr] 5S¹ 4d⁴", "transition-metal"],
    ["Mo", "Molybdenum", 42, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S¹ / 4d⁵", "[Kr] 5S¹ 4d⁵", "transition-metal"],
    ["Tc", "Technetium", 43, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d⁵", "[Kr] 5S² 4d⁵", "transition-metal"],
    ["Ru", "Ruthenium", 44, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S¹ / 4d⁷", "[Kr] 5S¹ 4d⁷", "transition-metal"],
    ["Rh", "Rhodium", 45, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S¹ / 4d⁸", "[Kr] 5S¹ 4d⁸", "transition-metal"],
    ["Pd", "Palladium", 46, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 4d¹⁰", "[Kr] 4d¹⁰", "transition-metal"],
    ["Ag", "Silver", 47, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S¹ / 4d¹⁰", "[Kr] 5S¹ 4d¹⁰", "transition-metal"],
    ["Cd", "Cadmium", 48, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰", "[Kr] 5S² 4d¹⁰", "transition-metal"],
    ["In", "Indium", 49, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P¹", "[Kr] 5S² 4d¹⁰ 5P¹", "post-transition"],
    ["Sn", "Tin", 50, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P²", "[Kr] 5S² 4d¹⁰ 5P²", "post-transition"],
    ["Sb", "Antimony", 51, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P³", "[Kr] 5S² 4d¹⁰ 5P³", "metalloid"],
    ["Te", "Tellurium", 52, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁴", "[Kr] 5S² 4d¹⁰ 5P⁴", "metalloid"],
    ["I", "Iodine", 53, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁵", "[Kr] 5S² 4d¹⁰ 5P⁵", "halogen"],
    ["Xe", "Xenon", 54, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶", "[Kr] 5S² 4d¹⁰ 5P⁶", "noble-gas"],
    ["Cs", "Cesium", 55, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S¹", "[Xe] 6S¹", "alkali-metal"],
    ["Ba", "Barium", 56, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S²", "[Xe] 6S²", "alkaline-earth"],
    ["La", "Lanthanum", 57, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 5d¹", "[Xe] 6S² 5d¹", "lanthanide"],
    ["Ce", "Cerium", 58, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 5d¹ / 4f¹", "[Xe] 6S² 5d¹ 4f¹", "lanthanide"],
    ["Pr", "Praseodymium", 59, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f³", "[Xe] 6S² 4f³", "lanthanide"],
    ["Nd", "Neodymium", 60, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f⁴", "[Xe] 6S² 4f⁴", "lanthanide"],
    ["Pm", "Promethium", 61, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f⁵", "[Xe] 6S² 4f⁵", "lanthanide"],
    ["Sm", "Samarium", 62, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f⁶", "[Xe] 6S² 4f⁶", "lanthanide"],
    ["Eu", "Europium", 63, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f⁷", "[Xe] 6S² 4f⁷", "lanthanide"],
    ["Gd", "Gadolinium", 64, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f⁷ / 5d¹", "[Xe] 6S² 4f⁷ 5d¹", "lanthanide"],
    ["Tb", "Terbium", 65, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f⁹", "[Xe] 6S² 4f⁹", "lanthanide"],
    ["Dy", "Dysprosium", 66, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁰", "[Xe] 6S² 4f¹⁰", "lanthanide"],
    ["Ho", "Holmium", 67, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹¹", "[Xe] 6S² 4f¹¹", "lanthanide"],
    ["Er", "Erbium", 68, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹²", "[Xe] 6S² 4f¹²", "lanthanide"],
    ["Tm", "Thulium", 69, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹³", "[Xe] 6S² 4f¹³", "lanthanide"],
    ["Yb", "Ytterbium", 70, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴", "[Xe] 6S² 4f¹⁴", "lanthanide"],
    ["Lu", "Lutetium", 71, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹", "[Xe] 6S² 4f¹⁴ 5d¹", "lanthanide"],
    ["Hf", "Hafnium", 72, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d²", "[Xe] 6S² 4f¹⁴ 5d²", "transition-metal"],
    ["Ta", "Tantalum", 73, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d³", "[Xe] 6S² 4f¹⁴ 5d³", "transition-metal"],
    ["W", "Tungsten", 74, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d⁴", "[Xe] 6S² 4f¹⁴ 5d⁴", "transition-metal"],
    ["Re", "Rhenium", 75, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d⁵", "[Xe] 6S² 4f¹⁴ 5d⁵", "transition-metal"],
    ["Os", "Osmium", 76, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d⁶", "[Xe] 6S² 4f¹⁴ 5d⁶", "transition-metal"],
    ["Ir", "Iridium", 77, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d⁷", "[Xe] 6S² 4f¹⁴ 5d⁷", "transition-metal"],
    ["Pt", "Platinum", 78, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S¹ / 4f¹⁴ / 5d⁹", "[Xe] 6S¹ 4f¹⁴ 5d⁹", "transition-metal"],
    ["Au", "Gold", 79, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S¹ / 4f¹⁴ / 5d¹⁰", "[Xe] 6S¹ 4f¹⁴ 5d¹⁰", "transition-metal"],
    ["Hg", "Mercury", 80, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰", "[Xe] 6S² 4f¹⁴ 5d¹⁰", "transition-metal"],
    ["Tl", "Thallium", 81, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P¹", "[Xe] 6S² 4f¹⁴ 5d¹⁰ 6P¹", "post-transition"],
    ["Pb", "Lead", 82, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P²", "[Xe] 6S² 4f¹⁴ 5d¹⁰ 6P²", "post-transition"],
    ["Bi", "Bismuth", 83, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P³", "[Xe] 6S² 4f¹⁴ 5d¹⁰ 6P³", "post-transition"],
    ["Po", "Polonium", 84, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁴", "[Xe] 6S² 4f¹⁴ 5d¹⁰ 6P⁴", "post-transition"],
    ["At", "Astatine", 85, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁵", "[Xe] 6S² 4f¹⁴ 5d¹⁰ 6P⁵", "halogen"],
    ["Rn", "Radon", 86, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶", "[Xe] 6S² 4f¹⁴ 5d¹⁰ 6P⁶", "noble-gas"],
    ["Fr", "Francium", 87, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S¹", "[Rn] 7S¹", "alkali-metal"],
    ["Ra", "Radium", 88, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S²", "[Rn] 7S²", "alkaline-earth"],
    ["Ac", "Actinium", 89, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 6d¹", "[Rn] 7S² 6d¹", "actinide"],
    ["Th", "Thorium", 90, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 6d²", "[Rn] 7S² 6d²", "actinide"],
    ["Pa", "Protactinium", 91, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f² / 6d¹", "[Rn] 7S² 5f² 6d¹", "actinide"],
    ["U", "Uranium", 92, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f³ / 6d¹", "[Rn] 7S² 5f³ 6d¹", "actinide"],
    ["Np", "Neptunium", 93, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f⁴ / 6d¹", "[Rn] 7S² 5f⁴ 6d¹", "actinide"],
    ["Pu", "Plutonium", 94, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f⁶", "[Rn] 7S² 5f⁶", "actinide"],
    ["Am", "Americium", 95, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f⁷", "[Rn] 7S² 5f⁷", "actinide"],
    ["Cm", "Curium", 96, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f⁷ / 6d¹", "[Rn] 7S² 5f⁷ 6d¹", "actinide"],
    ["Bk", "Berkelium", 97, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f⁹", "[Rn] 7S² 5f⁹", "actinide"],
    ["Cf", "Californium", 98, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁰", "[Rn] 7S² 5f¹⁰", "actinide"],
    ["Es", "Einsteinium", 99, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹¹", "[Rn] 7S² 5f¹¹", "actinide"],
    ["Fm", "Fermium", 100, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹²", "[Rn] 7S² 5f¹²", "actinide"],
    ["Md", "Mendelevium", 101, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹³", "[Rn] 7S² 5f¹³", "actinide"],
    ["No", "Nobelium", 102, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴", "[Rn] 7S² 5f¹⁴", "actinide"],
    ["Lr", "Lawrencium", 103, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 7p¹", "[Rn] 7S² 5f¹⁴ 7p¹", "actinide"],
    ["Rf", "Rutherfordium", 104, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d²", "[Rn] 7S² 5f¹⁴ 6d²", "transition-metal"],
    ["Db", "Dubnium", 105, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d³", "[Rn] 7S² 5f¹⁴ 6d³", "transition-metal"],
    ["Sg", "Seaborgium", 106, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d⁴", "[Rn] 7S² 5f¹⁴ 6d⁴", "transition-metal"],
    ["Bh", "Bohrium", 107, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d⁵", "[Rn] 7S² 5f¹⁴ 6d⁵", "transition-metal"],
    ["Hs", "Hassium", 108, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d⁶", "[Rn] 7S² 5f¹⁴ 6d⁶", "transition-metal"],
    ["Mt", "Meitnerium", 109, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d⁷", "[Rn] 7S² 5f¹⁴ 6d⁷", "transition-metal"],
    ["Ds", "Darmstadtium", 110, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d⁸", "[Rn] 7S² 5f¹⁴ 6d⁸", "transition-metal"],
    ["Rg", "Roentgenium", 111, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d⁹", "[Rn] 7S² 5f¹⁴ 6d⁹", "transition-metal"],
    ["Cn", "Copernicium", 112, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰", "[Rn] 7S² 5f¹⁴ 6d¹⁰", "transition-metal"],
    ["Uut", "Nihonium", 113, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰ / 7P¹", "[Rn] 7S² 5f¹⁴ 6d¹⁰ 7P¹", "post-transition"],
    ["Fl", "Flerovium", 114, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰ / 7P²", "[Rn] 7S² 5f¹⁴ 6d¹⁰ 7P²", "post-transition"],
    ["Uup", "Moscovium", 115, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰ / 7P³", "[Rn] 7S² 5f¹⁴ 6d¹⁰ 7P³", "post-transition"],
    ["Lv", "Livermorium", 116, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰ / 7P⁴", "[Rn] 7S² 5f¹⁴ 6d¹⁰ 7P⁴", "post-transition"],
    ["Uus", "Tennessine", 117, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰ / 7P⁵", "[Rn] 7S² 5f¹⁴ 6d¹⁰ 7P⁵", "halogen"],
    ["Uuo", "Oganesson", 118, "1S² / 2S² / 2P⁶ / 3S² / 3P⁶ / 4S² / 3d¹⁰ / 4P⁶ / 5S² / 4d¹⁰ / 5P⁶ / 6S² / 4f¹⁴ / 5d¹⁰ / 6P⁶ / 7S² / 5f¹⁴ / 6d¹⁰ / 7P⁶", "[Rn] 7S² 5f¹⁴ 6d¹⁰ 7P⁶", "noble-gas"],
];

// Superscript digit map for rendering
const supDigits = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };

// Convert config text with Unicode superscripts into HTML with <sup> tags
function configToHTML(text) {
    if (!text) return '<span style="opacity:0.4">—</span>';
    // Replace superscript unicode chars with <sup> tags
    return text.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (match) => {
        const normal = match.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, ch => {
            return Object.keys(supDigits).find(k => supDigits[k] === ch) || ch;
        });
        return `<sup>${normal}</sup>`;
    });
}

// Format category name for display
function formatCategory(cat) {
    return cat.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// DOM references
const grid = document.getElementById('elementsGrid');
const searchInput = document.getElementById('searchInput');
const searchCount = document.getElementById('searchCount');
const resultCard = document.getElementById('resultCard');
const resultPlaceholder = document.getElementById('resultPlaceholder');
const resultContent = document.getElementById('resultContent');

let selectedBtn = null;

// Build element buttons
function buildGrid() {
    const fragment = document.createDocumentFragment();
    elements.forEach(([symbol, name, number, config, abbr, category]) => {
        const btn = document.createElement('button');
        btn.className = `element-btn ${category}`;
        btn.setAttribute('data-symbol', symbol);
        btn.setAttribute('data-name', name);
        btn.setAttribute('data-number', number);
        btn.innerHTML = `
            <span class="el-symbol">${symbol}</span>
            <span class="el-number">${number}</span>
            <span class="el-name">${name}</span>
        `;
        btn.addEventListener('click', () => selectElement(symbol));
        fragment.appendChild(btn);
    });
    grid.appendChild(fragment);
}

// Select an element and display its configuration
function selectElement(symbol) {
    const el = elements.find(e => e[0] === symbol);
    if (!el) return;

    const [sym, name, number, config, abbr, category] = el;

    // Update result display
    resultPlaceholder.style.display = 'none';
    resultContent.style.display = 'block';
    resultCard.classList.add('active');

    // Force re-animation
    resultContent.style.animation = 'none';
    resultContent.offsetHeight; // trigger reflow
    resultContent.style.animation = '';

    document.getElementById('badgeSymbol').textContent = sym;
    document.getElementById('badgeNumber').textContent = number;
    document.getElementById('elementName').textContent = `${name} (${sym})`;
    document.getElementById('elementCategory').textContent = formatCategory(category);
    document.getElementById('fullConfig').innerHTML = configToHTML(config);
    document.getElementById('abbrConfig').innerHTML = configToHTML(abbr);

    // Update selected button styling
    if (selectedBtn) selectedBtn.classList.remove('selected');
    const newBtn = grid.querySelector(`[data-symbol="${sym}"]`);
    if (newBtn) {
        newBtn.classList.add('selected');
        selectedBtn = newBtn;
    }
}

// Search / filter
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const buttons = grid.querySelectorAll('.element-btn');
    let visible = 0;

    buttons.forEach(btn => {
        const sym = btn.getAttribute('data-symbol').toLowerCase();
        const name = btn.getAttribute('data-name').toLowerCase();
        const num = btn.getAttribute('data-number');

        const match = !query || sym.includes(query) || name.includes(query) || num === query;
        btn.classList.toggle('filtered-out', !match);
        if (match) visible++;
    });

    if (query) {
        searchCount.textContent = `${visible} / ${elements.length}`;
    } else {
        searchCount.textContent = '';
    }
}

// Initialize
buildGrid();
searchInput.addEventListener('input', handleSearch);

// Select first element on load for a nice initial state
selectElement('H');
