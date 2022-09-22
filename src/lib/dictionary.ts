export default new Map([
  // Basic Patterns
  [ "self", "Mind's Reflection" ],
  [ "pos", "Compass' Purification" ],
  [ "look", "Alidade's Purification" ],
  [ "height", "Stadiometer's Purification" ],
  [ "speed", "Pace Purification" ],
  [ ".", "Reveal" ],
  [ "raycast-block", "Archer's Distillation" ],
  [ "raycast-side", "Architect's Distillation" ],
  [ "raycast-entity", "Scout's Distillation" ],

  // Mathematics
  [ "+", "Additive Distillation" ],
  [ "-", "Subtractive Distillation" ],
  [ "*", "Multiplicative Distillation" ],
  [ "/", "Division Distillation" ],
  [ "size", "Length Purification" ],
  [ "pow", "Power Distillation" ],
  [ "floor", "Floor Purification" ],
  [ "ceil", "Ceiling Purification" ],
  [ "vect", "Vector Exaltation" ],
  [ "components", "Vector Desintegration" ],
  [ "mod", "Modulus Distillation" ],
  [ "axis", "Axial Purification" ],
  [ "rand", "Entropy Reflection" ],

  // Constants
  [ "vx+", "Vector Reflection +X" ],
  [ "vx-", "Vector Reflection -X" ],
  [ "vy+", "Vector Reflection +Y" ],
  [ "vy-", "Vector Reflection -Y" ],
  [ "vz+", "Vector Reflection +Z" ],
  [ "vz-", "Vector Reflection -Z" ],
  [ "0vec", "Vector Reflection 0" ],
  [ "tau", "Circle's Reflection" ],
  [ "pi", "Arc's Reflection" ],
  [ "e", "Euler's Reflection" ],
  [ "null", "Nullary Reflection" ],

  // Stack Manipulation
  [ "swap", "Jester's Gambit" ],
  [ "fish", "Fisherman's Gambit" ],
  [ "size", "Flock's Reflection" ],
  [ "list", "Flock's Gambit" ],
  [ "explode", "Flock's Desintegration" ],
  [ "dup", "Gemini Decomposition" ],
  [ "dupn", "Gemini Gambit" ],
  [ "lehmer", "Swindler's Gambit" ],

  // Logical Operators
  [ ">", "Maximus Distillation" ],
  [ "<", "Minimus Distillation" ],
  [ ">=", "Maximus Distillation II" ],
  [ "<=", "Minimus Distillation II" ],
  [ "=", "Equality Distillation" ],
  [ "!=", "Inequality Distillation" ],
  [ "!", "Negation Purification" ],
  [ "ident", "Identity Purification" ],
  [ "disjunct", "Disjunction Purification" ],
  [ "conjunct", "Conjunction Distillation" ],
  [ "exclude", "Exclusion Purification" ],
  
  // Entities
  [ "@pos", "Entity Purification" ],
  [ "animal@pos", "Entity Purification: Animal" ],
  [ "monster@pos", "Entity Purification: Monster" ],
  [ "item@pos", "Entity Purification: Item" ],
  [ "player@pos", "Entity Purification: Player" ],
  [ "living@pos", "Entity Purification: Living" ],
  [ "efind-animal", "Zone Distillation: Animal" ],
  [ "efind-!animal", "Zone Distillation: Non-Animal" ],
  [ "efind-monster", "Zone Distillation: Monster" ],
  [ "efind-!monster", "Zone Distillation: Non-Monster" ],
  [ "efind-item", "Zone Distillation: Item" ],
  [ "efind-!item", "Zone Distillation: Non-Item" ],
  [ "efind-player", "Zone Distillation: Player" ],
  [ "efind-!player", "Zone Distillation: Non-Player" ],
  [ "efind-living", "Zone Distillation: Living" ],
  [ "efind-!living", "Zone Distillation: Non-Living" ],
  [ "efind", "Zone Distillation: Any" ],

  // List Manipulation
  [ "select", "Selection Distillation" ],
  [ "slice", "Selection Exaltation" ],
  [ "push", "Integration Distillation" ],
  [ "concat", "Combination Distillation" ],
  [ "empty", "Vacant Reflection" ],
  [ "single", "Single's Purification" ],
  [ "len", "Abacus Purification" ],
  [ "reverse", "Retrograde Purification" ],
  [ "find", "Locator's Distillation" ],
  [ "remove", "Excisor's Distillation" ],
  [ "replace", "Surgeon's Exaltation" ],
  [ "shift", "Speaker's Distillation" ],
  [ "head", "Speaker's Decomposition" ],

  // Patterns as Iotas
  [ "consider", "Consideration" ],
  [ "(", "Introspection" ],
  [ ")", "Retrospection" ],

  // Reading and Writing
  [ "read", "Scribe's Reflection" ],
  [ "can-read", "Auditor's Reflection" ],
  [ "read-item", "Scribe's Purification" ],
  [ "can-read-item", "Auditor's Purification" ],
  [ "write", "Scribe's Gambit" ],
  [ "can-write", "Auditor's Purification" ],
  [ "write-raven", "Huginn's Gambit" ],
  [ "read-raven", "Muninn's Reflection" ],

  // Advanced Mathematics
  [ "sin", "Sine Purification" ],
  [ "cos", "Cosine Purification" ],
  [ "tan", "Tangent Purification" ],
  [ "asin", "Inverse Sine Purification" ],
  [ "acos", "Inverse Conside Purification" ],
  [ "atan", "Inverse Tangent Purification" ],
  [ "log", "Logarithmic Distillation" ],

  // Sets
  [ "union", "Unifying Distillation" ],
  [ "intersect", "Intersection Distillation" ],
  [ "x-disjunct", "Exclusionary Distillation" ],
  [ "bitwise-not", "Inversion Purification" ],
  [ "uniq", "Uniqueness Purification" ],

  // Meta-Evaluation
  [ "hermes", "Hermes' Gambit" ],
  [ "thoth", "Thoth's Gambit" ],
  [ "charon", "Charon's Gambit" ],

  // Spell Circle Patterns
  [ "ipos", "Waystone Reflection" ],
  [ "ilook", "Lodestone Reflection" ],
  [ "lnw-bound", "Lesser Fold Reflection" ],
  [ "use-bound", "Greater Fold Reflection" ],

  // Akashic Patterns
  [ "read-akash", "Akasha's Distillation" ],
  [ "write-akash", "Akasha's Gambit" ],

  // Basic Spells
  [ "explosion", "Explosion" ],
  [ "fireball", "Fireball" ],
  [ "impulse", "Impulse" ],
  [ "blink", "Blink" ],
  [ "play", "Play Note" ],

  // Blockworks
  [ "place-block", "Place Block" ],
  [ "break-block", "Break Block" ],
  [ "create-water", "Create Water" ],
  [ "destroy-liquid", "Destroy Liquid" ],
  [ "conjure-block", "Conjure Block" ],
  [ "conjure-light", "Conjure Light" ],
  [ "overgrow", "Overgrow" ],
  [ "edify-sapling", "Edify Sapling" ],
  [ "ignite-block", "Ignite Block" ],
  [ "extinguish-area", "Extinguish Area" ],
  
  // Nadirs
  [ "white-nadir", "White Sun's Nadir" ],
  [ "blue-nadir", "Blue Sun's Nadir" ],
  [ "black-nadir", "Black Sun's Nadir" ],
  [ "red-nadir", "Red Sun's Nadir" ],
  [ "green-nadir", "Green Sun's Nadir" ],

  // Crafting Casting Items
  [ "craft-cypher", "Craft Cypher" ],
  [ "craft-trinker", "Craft Trinker" ],
  [ "craft-artifact", "Craft Artifact" ],
  [ "recharge-item", "Recharge Item" ],
  [ "erase-item", "Erase Item" ],

  // Sentinels
  [ "sentinel-summon", "Summon Sentinel" ],
  [ "sentinel-banish", "Banish Sentinel" ],
  [ "sentinel-pos", "Locate Sentinel" ],
  [ "raycast-sentinel", "Wayfind Sentinel" ],

  // Internalize Pigment
  [ "internalize-pigment", "Internalize Pigment" ],

  // Great Spells: Lava
  [ "create-lava", "Create Lava" ],

  // Great Spells: Zeniths
  [ "white-zenith", "White Sun's Zenith" ],
  [ "blue-zenith", "Blue Sun's Zenith" ],
  [ "black-zenith", "Black Sun's Zenith" ],
  [ "red-zenith", "Red Sun's Zenith" ],
  [ "green-zenith", "Green Sun's Zenith" ],

  // Great Spells: Weather Manipulation
  [ "summon-lightning", "Summon Lightning" ],
  [ "summon-rain", "Summon Rain" ],
  [ "dispel-rain", "Dispel Rain" ],

  // Great Spells: Flight
  [ "flight", "Flight" ],

  // Great Spells: Greater Teleport
  [ "greater-teleport", "Greater Teleport" ],

  // Great Spells: Summon Greater Sentinel
  [ "summon-greater-sentinel", "Summon Greater Sentinel" ],

  // Great Spells: Craft Phial
  [ "craft-phial", "Craft Phial" ],

  // Great Spells: Flay Mind
  [ "flay-mind", "Flay Mind" ],

  // Cross-Mod Compatibility: Gravity Changer
  [ "get-grav", "Gravitational Purification" ],
  [ "set-grav", "Alter Gravity" ],

  // Cross-Mod Compatibility: Pehkui
  [ "get-scale", "Gulliver's Purification" ],
  [ "set-scale", "Alter Scale" ]
])
