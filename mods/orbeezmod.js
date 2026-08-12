// =======================================================
// MOD: Orbeez
// Adiciona o elemento "Orbeez" na categoria "Special".
// - Cores variadas ao spawnar (uma cor aleatória do array
//   é escolhida para cada pixel).
// - Cresce/se espalha ao entrar em contato com "Water",
//   convertendo a água vizinha em novas bolinhas de Orbeez.
// =======================================================

elements.orbeez = {
    name: "Orbeez",
    desc: "Bolinhas de gel super absorventes. Ao tocar na água, incham e se multiplicam, espalhando-se pelo líquido.",
    category: "special",
    state: "solid",
    density: 1250,      // afunda devagar na água (que tem densidade 1000)
    alpha: 0.85,         // leve transparência, aparência de gel
    color: [
        "#ff6ec7",
        "#6ec7ff",
        "#ffe66e",
        "#7effa1",
        "#c77eff",
        "#ff9e6e",
        "#6ee0ff",
        "#ff6e94"
    ],
    behavior: behaviors.POWDER, // cai e se empilha como areia
    reactions: {
        "water": {
            elem1: "orbeez", // a própria Orbeez continua sendo Orbeez
            elem2: "orbeez", // a água vizinha "vira" Orbeez -> efeito de crescimento
            chance: 0.06     // ~6% de chance por tick (ajuste esse número p/ crescer mais rápido/devagar)
        },
        "magma": {
            elem1: "smoke"   // a Orbeez evapora e vira Smoke (magma não é afetado)
        },
        "dirty_water": {
            elem2: "mud",    // a água suja ao redor vira Mud (a Orbeez continua Orbeez)
            chance: 0.1
        }
    }
};
