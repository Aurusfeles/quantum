export const quantum_card_status = {
    no_status: {
        unicode_icon: "",
        color: "grey",
        en: "no status",
        fr: "statut inconnu"
    },
    new: {
        unicode_icon: "🟊",
        color: "yellow",
        en: "new",
        fr: "nouvelle"
    },
    rev: {
        unicode_icon: "!",
        color: "white",
        en: "revised",
        fr: "revue"
    },
    chg: {
        unicode_icon: "⇨",
        color: "green",
        en: "changed",
        fr: "changée"
    },
    rm: {
        unicode_icon: "🞬",
        color: "red",
        en: "removed",
        fr: "retirée"
    },
    unchg: {
        unicode_icon: "",
        color: "black",
        en: "unchanged",
        fr: "inchangée"
    },
    tst: {
        unicode_icon: "🎲",
        color: "yellow",
        en: "playtesting",
        fr: "en test"

    }


};

export const quantum_card_type = {
    act: {
        en: "action",
        fr: "action"
    },
    cbt: {
        en: "combat",
        fr: "combat"
    },
    shp: {
        en: "ship",
        fr: "vaisseau"
    },
    mvt: {
        en: "movement",
        fr: "déplacement"
    },
    crd: {
        en: "card",
        fr: "carte"
    },
    con: {
        en: "conquer",
        fr: "conquête"
    },
    res: {
        en: "research",
        fr: "recherche"
    }

};

export const quantum_card_skills = [
    {
        "type": "act",
        "art": null,
        "en": {
            "name": "Ambitious",
            "text": "Once per turn you may take an additional action, then put a token on this card. If this card has three tokens on it, discard it.",
            "status": "new",

            "notes": "One of my favourite cards in the game is Resourceful, so I tried to design this card to be a Skill I would want to take instead of Resourceful."
        },
        "fr": {
            "name": "Ambitieux",
            "text": "Une fois par tour, vous pouvez réaliser une action supplémentaire, puis poser un jeton sur cette carte. Si cette carte a 3 jetons sur elle, défaussez la.",
            "status": "new",
            "notes": "La carte Resourceful est une de mes préférées, j'ai donc essayé d'élaborer cette carte comme une Compétence que je voudrais prendre à la place de Resourceful."
        }
    },
    {
        "type": "cbt",
        "art": null,
        "en": {
            "name": "Brutal",
            "text": "For Combat rolls, roll twice and use the lower number.",
            "status": "new",

            "notes": "Cruel and relentless were both mechnically the same, so we wanted to reduce it to just one card. The wording was also trickier then it needed to be."
        },
        "fr": {
            "name": "Brutal",
            "text": "Pendant les combats, lancez votre dé 2 fois et utilisez le résultat le plus faible.",
            "status": "new",

            "notes": "Cruel et *relentless* sont mécaniquement les mêmes, nous avons donc voulu les fondre en une seule carte. De plus le texte était inutilement compliqué."
        }
    },
    {
        "type": "shp",
        "art": "thrawn",
        "en": {
            "name": "Calculating",
            "text": "When a ship is placed in your scrapyard, choose it's ship number.",
            "status": "new",

            "notes": "The other half of Clever. The original Clever let you control ship numbers both when you reconfigure and when a ship is destroyed. We split that across two cards. It also feels very thematic, having to plan in advance which ship number we'll want when you deploy next."
        },
        "fr": {
            "name": "Calculateur",
            "text": "Lorsqu'un vaisseau est placé dans votre casse, choisissez sa valeur.",
            "status": "new",
            "notes": "L'autre moitié d'Astucieux. L'Astucieux d'origine permettait de contrôler la valeur des vaisseaux pour la reconfiguration et après la destruction. Nous avons séparé cela en 2 cartes. C'est aussi thématiquement satisfaisant de plannifier à l'avance la valeur de vaisseau pour le prochain déploiement."
        }
    },
    {
        "type": "shp",
        "art": "clever_",
        "en": {
            "name": "Clever",
            "status": "chg",
            "text": "Whenever you would roll a ship die, choose the ship number instead.",
            "changes": {
                "text": "After reconfiguring, you may increase or decrease the ship number by 1.",
                "notes": "Clever was a must-pick card, it was far too powerful, I've rarely seen a clever player _not_ win. This rework went through several iterations, each time reducing it's power-level. We finally split it's ability across two cards (the other being Calculating). We now feel it's still a very useful card without being overbearing.",
            }
        },
        "fr": {
            "name": "Astucieux",
            "status": "chg",
            "text": "Vous pouvez choisir la valeur du dé (au lieu de le lancer) à chaque fois que vous devez reconfigurer un vaisseau.",
            "changes": {
                "notes": "La carte Astucieux était incontournable, beaucoup trop puissante. J'ai rarement vu un joueur perdre avec. Cette modification est passée par plusieurs itérations, réduisant sa puissance à chaque fois. Nous avons finalement séparé ce pouvoir en deux carte (l'autre étant Calculateur). Maintenant nous avons le sentiment que c'est une carte très utile sans être dominante.",
                "text": "Après Reconfiguration, vous pouvez augmenter ou diminuer de 1 la valeur du vaisseau.",
            }
        }
    },
    {
        "type": "act",
        "art": "curious",
        "alt_art": "zoning_in",
        "en": {

            "name": "Curious",
            "changes": {
                "text": "At the end of your turn, if you did not Attack or Conquer, gain an additional Move or Research action.",
                "notes": "We've tightened up the wording on the original card to fit better with the spirirt of what it was trying to give the player."
            },
            "status": "chg",
            "text": "Each turn, get 1 extra move action for free (you cannot use it to attack).",
        },
        "fr": {
            "name": "Curieux",
            "status": "chg",
            "text": "Une fois par tour, vous pouvez effectuer un déplacement gratuit si vous n'attaquez pas pendant votre tour.",

            "changes": {
                "text": "À la fin de chaque tour, si vous n'avez pas Attaqué ni Conquis, gagnez une action Déplacer ou Recherche supplémentaire.",
                "notes": "Nous avons remanié le texte de la carte d'origine pour avoir une meilleure idée de ce qu'elle offre au joueur."

            }
        }
    },
    {
        "type": "mvt",
        "art": "jack",
        "en": {
            "name": "Devious",
            "text": "You may move your ships through enemy ships. These spaces do not count towards your movement.",
            "status": "new",

            "notes": "The original game already had a good number of movement abilities, so this one was hard to come up with. I wanted a skill that let you do more 'surprise' manevuers like Stealthy does. Originally it just let you pass through other ships, but was still too weak compared to other cards."
        },
        "fr": {
            "name": "Sournois",
            "text": "Vos vaisseaux peuvent passer à travers les vaisseaux ennemis. Ces espaces ne comptent pas dans leurs déplacements.",
            "status": "new",
            "notes": "Le jeu de base avait déjà un grand nombre de capacité de Déplacement, alors celle-ci était difficile à trouver. Je souhaitais une Compétence qui vous laisse plus de surprise dans les manoeuvres, un peu comme *Stealthy*. À la base elle permettait simplement de passer à travers les vaisseaux, mais elle était encore trop faible par rapport aux autres."
        }
    },
    {
        "type": "act",
        "art": null,
        "en": {
            "name": "Industrious",
            "text": "Gain an additional Deploy action each turn.",
            "status": "new",

            "notes": "Successor to Eager. Most cards that award additional actions, usually give a single action with a restriction or penalty. However Eager could reward up to 3 free actions quite regularly. Industrious keeps the same flavour but brings the power level in line."
        },
        "fr": {
            "name": "Industriel",
            "text": "À chaque tour, vous disposez d'une action Déployer supplémentaire.",
            "status": "new",
            "notes": "Le successeur d'Impatient. La plupart des cartes qui donnent une action supplémentaire n'en donne qu'une, avec une restriction ou une contre-partie. Cependant Impatient pouvait offrir 3 actions gratuites régulièrement. Industriel garde la même idée mais sans être trop puissante."
        }
    },
    {
        "type": "crd",
        "art": null,
        "en": {
            "name": "Patient",
            "text": "Whenever you take a Tactic, you may instead store it. At the end of each of your turns, you may play a stored Tactic. When you take this Skill, you may take and store a Tactic.",
            "status": "new",

            "notes": "This card was designed more to explore the design space of setting up larger turns than to serve a specific gameplay purpose."
        },
        "fr": {
            "name": "Patient",
            "text": "A chaque fois que vous prenez une carte *Tactique*, vous pouvez décider de la mettre de côté. À la fin de chaque tour, vous pouvez jouer une carte *Tactique* mise de côté. Lorsque vous prenez cette Compétence, vous pouvez prendre et mettre de côté une carte *Tactique*.",
            "status": "new",
            "notes": "Cette carte a plus été élaborée dans l'idée de tester des tours de jeu plus longs, plutôt que pour amener une nouvelle mécanique de jeu."
        }
    },
    {
        "type": "con",
        "art": "create",
        "en": {
            "name": "Pioneering",
            "text": "You may use your Research number in place of one of your ship numbers when Conquering.",
            "status": "new",

            "notes": "A symmetrical card to the new Tyrannical. Haven't played with it too much yet to see if it's too powerful, as it's a lot easier to manipulate your research than it is your dominance."
        },
        "fr": {
            "name": "Pionier",
            "text": "Vous pouvez utiliser votre valeur de Recherche à la place d'un de vos vaisseau pour Conquérir.",
            "status": "new",
            "notes": "La soeur de la nouvelle carte Tyrannique. Je n'ai pas encore beaucoup joué avec pour juger si elle est trop puissante, du fait qu'il est beaucoup plus facile de manipuler la Recherche que la Domination."
        }
    },
    {
        "type": "con",
        "art": null,
        "en": {
            "name": "Prideful",
            "text": "Your Dominance resets at 4, 5, or 6. When a player destroys one of your ships, they may take this card from you.",
            "status": "new",

            "notes": "We had a card called Fervent that reduced the amount of dominance you need to 4, and then to 5, but it still proved too good. I still really enjoyed the ability, so I want to try it with the mechanics of a Skill passing from player to player. My worry is that it might dramatically cahnge the flow of the game if it pops up."
        },
        "fr": {
            "name": "Orgueilleux",
            "text": "Votre bonus de Domination se déclenche à partir de 4. Lorsqu'un ennemi détruit un de vos vaisseau, il peut vous prendre cette carte.",
            "status": "new",
            "notes": "Nous avions une carte appelée Fervent qui réduisait la quantité de Domination nécessaire à 4, puis à 5, mais elle s'est révélée encore trop puissante. Mais j'aimais vraiment cette Compétence, donc j'ai voulu tester la mécanique d'une Compétence qui passe de joueur en joueur. Ma seule inquiétude est qu'elle peut bouleverser le déroulement du jeu lorsqu'elle apparaît."
        }
    },
    {
        "type": "cbt",
        "art": null,
        "en": {
            "name": "Profiteering",
            "text": "When you take a card for Conquering, may instead gain 1 Missile.",
            "status": "new",

            "notes": "More ways to get missiles"
        },
        "fr": {
            "name": "Profiteur",
            "text": "Vous pouvez prendre un Missile au lieu d'une carte après une Conquête.",
            "status": "new",
            "notes": "Plus de façons d'obtenir des Missiles."
        }
    },
    {
        "type": "cbt",
        "art": "ravenous",
        "en": {
            "name": "Ravenous",
            "status": "chg",
            "text": "When you destroy an enemy ship, dominance +2; when one of your ships is destroyed, dominance -2.",
            "changes": {
                "notes": "Abilities in Quantum almost never have downsides, so this card stood out. Many players would take this card once, and see how fickle the downside can be, and rarely ever take it again. We balanced the power level to only let it proc once a turn.",
                "text": "The first time you destroy an enemy ship each turn, gain 1 additional Dominance.",
            }

        },
        "fr": {
            "name": "Vorace",
            "status": "chg",
            "text": "Lorsque vous détruisez un vaisseau ennemi, augmentez votre Domination de 2, lorsqu'un de vos vaisseaux est détruit, diminuez votre Domination de 2.",
            "changes": {
                "notes": "Les Compétences dans Quantum n'ont presque jamais d'inconvénients, alors cette carte sortait du lot. Beaucoup de joueurs prenaient cette carte une fois, se rendaient compte des désagréments, et ne la reprenaient jamais. Nous avons équilibré la puissance avec le nouveau système.",
                "text": "À chaque tour, gagnez 1 Domination supplémentaire la première fois que vous détruisez un vaisseau ennemi.",
            }
        }
    },
    {
        "type": "con",
        "art": "righteous",
        "en": {
            "name": "Righteous",

            "status": "chg",
            "text": "Your dominance is not reduced when one of your ships is destroyed.",
            "changes": {
                "notes": "Righteous was too good, but the flavour of the card and the impact on the game was too good to remove, so we added on the no research penalty. The card still might be too good, but at least it is more of a situational pick-up.",
                "text": "You can not lose Dominance. You can not gain Research.",

            }

        },
        "fr": {
            "name": "Juste",

            "status": "chg",
            "text": "Votre Domination n'est pas réduite lorsqu'un de vos vaisseaux est détruit.",
            "changes": {
                "text": "Vous ne pouvez pas perdre de Domination. Vous ne pouvez pas augmenter votre Recherche.",
                "notes": "La carte 'Juste' était trop puissante, mais elle était également trop belle et trop connectée avec le jeu pour être retirée, alors nous avons ajouté une pénalité sur la Recherche. Cette carte est peut-être encore trop puissante, mais au moins elle fait réfléchir à deux fois."
            }

        }
    },
    {
        "type": "crd",
        "art": "wrath",
        "en": {
            "name": "Ruthless",
            "text": "The first time you destroy an enemy ship each turn, you may disable one of the emeny's Skills until the start of your next turn.",
            "status": "new",

            "notes": "The spiritual sucessor to the original Sabotage card. Losing a card turns out to be quite a powerful effect, so to balance this Sabotage let the affected player choose which card they lose, however in practice this rarely does what you want. Ruthless solves by giving the ability to slow a player down without crippling them, while also providing them counter-play (by avoiding the Ruthless player's ships)."
        },
        "fr": {
            "name": "Implacable",
            "text": "À chaque tour, la première fois que vous détruisez le vaisseau d'un ennemi, vous pouvez désactiver une de ses Compétences jusqu'au début de votre prochain tour.",
            "status": "new",
            "notes": "Le successeur spirituel de la carte 'Sabotage' de base. Perdre une carte se révèle être un effet assez puissant. Pour équilibrer cela, le Sabotage laissait le joueur victime choisir la carte à supprimer, mais c'était rarement celle qu'on ciblait à la base. Implacable résout cela en donnant la possibilité de ralentir un joueur sans le diminuer pour autant, tout en leur laissant une échappatoire (en évitant les vaisseaux du joueur Implacable)."
        }
    },
    {
        "type": "crd",
        "art": null,
        "en": {
            "name": "Talented",
            "text": "You can have up to 5 Skills.",
            "status": "new",

            "notes": "So far this hasn't broken the game. It doesn't seem like any skill was designed around only having 3 of them."
        },
        "fr": {
            "name": "Talentueux",
            "text": "Vous pouvez avoir jusqu'à 5 Compétences.",
            "status": "new",

            "notes": "Jusqu'à présent, cela n'a pas déséquilibré le jeu. Les capacités n'ont pas l'air d'avoir été conçue avec la limite de 3 en tête."
        }
    },
    {
        "type": "con",
        "art": "tyrannical_",
        "alt_art": "menance",
        "en": {
            "name": "Tyrannical",

            "status": "chg",
            "text": "Once per turn as a free action, you may reduce your research by 1 and gain 1 dominance.",
            "changes": {
                "text": "You may use your Dominance number as an additional ship number when Conquering.",
                "notes": "The original tyrannical was a weird card. It enabled a strategy our group dubbed 'Ghost Fleet', where you would try to get all your ships destroyed, not redeploy them, and use Tyrannical each turn to gain Dominance. While slow, the strategy is unstoppable and not that fun to play against. This new version still promotes the idea of having high dominance, but now it can be used as a tool opening up interesting decisions to the player. Do I want to tick it over this turn? Or wait so I can use that 5 to easily Conquer a different planet?"
            },

        },
        "fr": {
            "name": "Tyrannique",

            "status": "chg",
            "text": "Une fois par tour, vous pouvez gratuitement réduire votre Recherche de 1 pour augmenter votre Domination de 1.",

            "changes": {
                "text": "Vous pouvez utiliser votre valeur de Domination comme une valeur additionnelle de vaisseau pour une Conquête.",
                "notes": "Le 'Tyrannique' d'origine était une carte bizarre. Elle permettait une stratégie que notre groupe surnommait 'La Flotte fantôme', où vous cherchiez à avoir tous vos vaisseaux détruits, ne pas les redéployer, et utiliser Tyrannique à chaque tour pour gagner de la Domination. Bien que lente, cette stratégie ne peut pas être contrée, et n'est pas amusante à observer. Cette nouvelle version incite toujours à avoir une Domination élevée, mais maintenant elle peut être utilisée comme un outil qui offre un choix intéressant au joueur. Est-ce que je veux réinitialiser  ma Domination ce tour-ci? Ou bien attendre et utiliser ce 5 pour Conquérir facilement cette planète?",
            }

        }
    },
    {
        "type": "mvt",
        "art": "agile",
        "fr": {
            "name": "Agile",
            "text": null,
            "status": "unchg",
            "original": "Tous vos vaisseaux bénéficient de +1 au mouvement.",

            "notes": null
        },
        "en": {
            "name": "Agile",
            "text": null,
            "status": "unchg",
            "original": "All of your ships have +1 movement.",

            "notes": null
        }
    },
    {
        "type": "act",
        "art": "arrogant",
        "fr": {
            "name": "Arrogant",
            "text": null,
            "status": "rm",
            "original": "Si au début de votre tour vous avez plus de vaisseaux sur le plateau que tout autre joueur, vous effectuez une action en plus.",
            "notes": null
        },
        "en": {
            "name": "Arrogant",
            "text": null,
            "status": "rm",
            "original": "If at the start of your turn you have more ships on the map than any other player, take 1 extra action.",

            "notes": null
        }
    },
    {
        "type": "res",
        "art": "brilliant",
        "fr": {
            "name": "Brilliant",

            "status": "rev",
            "text": "Ajoutez +2 au dé de recherche au début de votre tour.",
            "changes": {
                "text": "Au début de votre tour, vous pouvez gagner 2 en Recherche.",
            }
        },
        "en": {
            "name": "Brilliant",
            "status": "rev",
            "text": "Add 2 to your research automatically at the start of your turn.",
            "changes": {
                "text": "At the start of your turn, you may gain 2 Research.",

            },

        }
    },
    {
        "type": "res",
        "art": "composed",
        "fr": {
            "name": "Cérébral",

            "status": "rev",
            "text": "Une fois par tour sans coût d'action, vous pouvez réduire votre domination de 1 et gagner 3 en recherche.",

            "changes": {
                "name": "Réfléchi",
                "text": "Une fois par tour, vous pouvez perdre 1 en Domination pour gagner 3 en Recherche.",
            }
        },
        "en": {
            "name": "Cereberal",
            "status": "rev",
            "text": "Once per turn as a free action, you may reduce your dominance by 1 and gain 3 research.",
            "changes": {
                "name": "Composed",
                "text": "Once per turn, you may lose 1 Dominance and gain 3 Research",
            }
        }
    },
    {
        "type": "act",
        "art": "conformist",
        "fr": {
            "name": "Conformiste",
            "text": null,
            "status": "rm",
            "original": "Si au début de votre tour au moins deux vaisseaux sur le plateau ont le même chiffre, vous disposez d'une action supplémentaire.",

            "notes": null
        },
        "en": {
            "name": "Conformist",
            "text": null,
            "status": "rm",
            "original": "If at the start of your turn 2 or more of your ships on the map have the same number, take 1 extra action.",

            "notes": null
        }
    },
    {
        "type": "cbt",
        "art": "cruel",
        "fr": {
            "name": "Cruel",
            "text": null,
            "status": "rm",
            "original": "En combat, vous pouvez forcer votre adversaire à relancer le dé (une seule fois).",

            "notes": "Remplacée par 'Brutal'"
        },
        "en": {
            "name": "Cruel",
            "text": null,
            "status": "rm",
            "original": "When you attack or defend, you can choose to have your opponent re-roll once.",

            "notes": "Replaced by 'Brutal'"
        }
    },
    {
        "type": "act",
        "art": "cunning",
        "fr": {
            "name": "Rusé",

            "status": "rev",
            "text": "Une fois par tour, vous pouvez utiliser, gratuitement, la capacité d'un de vos vaisseaux une seconde fois.",
            "changes": {
                "text": "Une fois par tour, vous pouvez utiliser la capacité d'un de vos vaisseau une seconde fois.",

            }

        },
        "en": {
            "name": "Cunning",

            "status": "rev",
            "text": "Once per turn, you may use one of your ship’s abilities a second time as a free action.",

            "changes": {
                "text": "Once per turn, you may use one ship ability a second time.",
            }
        }
    },
    {
        "type": "cbt",
        "art": "dangerous",
        "fr": {
            "name": "Dangereux",
            "text": null,
            "status": "unchg",
            "original": "Lorsque vous défendez, avant que les joueurs ne lancent les dés de combat, vous pouvez décider de détruire les deux vaisseaux (aucun effet de domination).",

            "notes": null
        },
        "en": {
            "name": "Dangerous",
            "text": null,
            "status": "unchg",
            "original": "When you defend, before players roll combat dice, you can decide to destroy both ships (there is no dominance effect).",

            "notes": null
        }
    },
    {
        "type": "act",
        "art": "eager",
        "fr": {
            "name": "Impatient",
            "text": null,
            "status": "rm",
            "original": "Le déploiement n'utilise aucune de vos actions.",

            "notes": "Encore une carte qui était beaucoup trop puissante. Remplacée par 'Industriel'."
        },
        "en": {
            "name": "Eager",
            "text": null,
            "status": "rm",
            "original": "Deploy does not use up one of your actions.",
            "notes": "Another card that was just too powerful. Replaced by 'Industrious'"
        }
    },
    {
        "type": "mvt",
        "art": "steadfast",
        "fr": {
            "name": "Énergique",
            "text": null,
            "status": "unchg",
            "original": "Vos vaisseaux peuvent se déplacer/attaquer plus d'une fois par tour (chaque déplacement compte comme une action).",

            "notes": null
        },
        "en": {
            "name": "Steadfast",
            "text": null,
            "status": "unchg",
            "original": "Your ships can move or move/attack more than once per turn (each move counts as an action).",
            "notes": "Renamed from 'Energetic'"
        }
    },
    {
        "type": "cbt",
        "art": "ferocious",
        "fr": {
            "name": "Féroce",

            "status": "rev",
            "text": "Soustrayez 1 à tous vos lancers de combat d'attaque et de défense.",

            "changes": {
                "text": "-1 à vos jets de combat",
            }
        },
        "en": {
            "name": "Ferocious",

            "status": "rev",
            "text": "Subtract 1 from every weapons or defenses combat roll.",

            "changes": {
                "text": "-1 to your Combat rolls",
            }
        }
    },
    {
        "type": "shp",
        "art": "flexible",
        "fr": {
            "name": "Flexible",
            "text": "Une fois par tour, vous pouvez, gratuitement, ajouter ou retrancher 1 à l'un de vos dés de vaisseau.",
            "status": "unchg",
            "original": "Une fois par tour, vous pouvez, gratuitement, ajouter ou retrancher 1 à l'un de vos dés de vaisseau.",

            "notes": null
        },
        "en": {
            "name": "Flexible",
            "text": "Once per turn, you may increase or decrease one of your ship numbers by 1",
            "status": "rev",
            "original": "Once per turn, you may change one of your ship dice up or down by 1 as a free action.",

            "notes": null
        }
    },
    {
        "type": "con",
        "art": "ingenious",
        "fr": {
            "name": "Ingénieux",

            "status": "rev",
            "text": "Tous vos vaisseaux adjacents à la planète, même en dehors des positions orbitales, sont pris en compte pour une action de construction.",

            "changes": {
                "text": "Pour Conquérir, vous pouvez aussi utiliser les espaces en diagonale autour de la planète.",
            }
        },
        "en": {
            "name": "Ingenious",

            "status": "rev",
            "text": "Each of your ships diagonally adjacent to a planet may be counted toward the construct action.",

            "changes": {
                "text": "When Conquering, you may use spaces diagonal to a planet",
            }
        }
    },
    {
        "type": "con",
        "art": "intelligent",
        "en": {
            "name": "Intelligent",

            "status": "rev",
            "text": "You can construct on a planet when you have an orbital total 1 higher or 1 lower than the planet’s number.",
            "changes": {
                "text": "When Conquering, you may add or subtract 1 from the planet number",
            }
        },
        "fr": {
            "name": "Intelligent",
            "status": "rev",
            "text": "Vous pouvez construire sure une planète avec un total orbital de +1 ou -1 par rapport à la valeur de la planète.",
            "changes": { "text": "Pour Conquérir, vous pouvez ajouter ou soustraire 1 au nombre de la planète.", }

        }
    },
    {
        "type": "mvt",
        "art": "nomadic",
        "en": {
            "name": "Nomadic",
            "text": null,
            "status": "rm",
            "original": "Once per turn, spend an action to relocate one of your ships in orbital position – put it in orbital position around a planet that is next to its current planet.",

            "notes": "This card rarely saw play and always required a further explanation of _exactly_ how it worked. In addition, it's ability isn't that flashy, so it ended up being a dead card."
        },
        "fr": {
            "name": "Nomade",
            "text": null,
            "status": "rm",
            "original": "Une fois par tour, vous pouvez utiliser une action pour disposer un de vos vaisseaux en position orbitale sur une planète voisine.",

            "notes": "Cette carte était rarement jouée, et demandait toujours des explications supplémentaires sur son fonctionnement exact. De plus, son pouvoir n'est pas si fantastique que ça, elle est donc devenue une carte morte."
        }
    },
    {
        "type": "res",
        "art": "plundering",
        "en": {
            "name": "Plundering",
            "text": "The first time you destroy an enemy ship each turn, gain 3 Research",
            "status": "unchg",
            "original": "If you destroy one or more enemy ships on your turn, increase your research by 3.",

            "notes": "The phrase 'If you destroy one or more enemy ships on your turn...' made it unclear exactly when the ability would trigger. There was also some debate about if the ability would trigger multiple times. We replaced all of these instances with this new wording."
        },
        "fr": {
            "name": "Pilleur",

            "status": "rev",
            "changes": {
                "text": "La première fois que vous détruisez un vaisseau ennemi pendant votre tour, gagnez 3 en Recherche.",
                "notes": "La phrase 'Si vous détruisez un ou plusieurs vaisseaux ennemi pendant votre tour...' n'était pas très claire concernant le moment et le nombre de déclenchement de cette capacité."
            },
            "text": "Si vous détruisez un ou plusieurs vaisseaux ennemis pendant votre tour, augmentez votre recherche de 3.",

        }
    },
    {
        "type": "res",
        "art": "precocious",
        "en": {
            "name": "Precocious",

            "status": "rev",
            "text": "Gain an advance card when research = 4 or higher (instead of 6).",

            "changes": {
                "text": "Your Research resets at 4, 5, or 6",
            }
        },
        "fr": {
            "name": "Précoce",

            "status": "rev",
            "text": "Gagnez une carte d'avancement lorsque le dé de recherche est égal à 4 ou plus (au lieu de 6).",

            "changes": {
                "text": "Votre Recherche se réinitialise à 4, 5, ou 6.",
            }
        }
    },
    {
        "type": "cbt",
        "art": "rational_",
        "en": {
            "name": "Rational",

            "status": "rev",
            "text": "Instead of rolling for weapons and defenses, all of your combat die rolls are considered to be 3.",

            "changes": {
                "text": "Your Combat rolls are 3",
            }
        },
        "fr": {
            "name": "Rationnel",

            "status": "rev",
            "text": "En combat, au lieu de lancer les dés, tous vos scores sont considérés comme des 3.",

            "changes": {
                "text": "Vos jets de combat valent toujours 3.",
            }
        }
    },
    {
        "type": "cbt",
        "art": "relentless",
        "en": {
            "name": "Relentless",
            "text": null,
            "status": "rm",
            "original": "When you attack or defend, you can roll again once after your opponent rolls.",

            "notes": "Replaced by 'Brutal'"
        },
        "fr": {
            "name": "Impitoyable",
            "text": null,
            "status": "rm",
            "original": "En cas de combat, vous pouvez relancer le dé après le lancer de votre adversaire.",

            "notes": "Remplacée par 'Brutal'"
        }
    },
    {
        "type": "act",
        "art": "resourceful",
        "en": {
            "name": "Resourceful",

            "status": "rev",
            "text": "Once per turn, take one of your ships from the map to your scrapyard, reroll it, and gain 1 action for that turn.",

            "changes": {
                "text": "Once per turn, you may destroy one of your ships and gain 1 Action.",
            }
        },
        "fr": {
            "name": "Resourceful",

            "status": "rev",
            "text": "Une fois par tour, déplacez un de vos vaisseaux du plateau vers votre casse, relancez-le, et gagnez une action en échange.",

            "changes": {
                "text": "Une fois par tour, vous pouvez détruire un de vos vaisseau et gagner 1 action.",
            }
        }
    },
    {
        "type": "act",
        "art": "scrappy",
        "en": {
            "name": "Scrappy",
            "text": null,
            "status": "rm",
            "original": "On your turn only, you may reroll all of your die rolls a second time (ship and weapons die rolls).",

            "notes": "This card had too much overlap with other cards, and is often strictly better. Also theme on the card was rather weak."
        },
        "fr": {
            "name": "Pugnace",
            "text": null,
            "status": "rm",
            "original": "A votre tour de jeu, vous pouvez relancer vos dés une seconde fois (lancer de dés de vaisseaux et de combat).",

            "notes": "Cette carte était redondante avec d'autres, tout en étant souvent bien meilleure. De plus, la carte était en décalage thématiquement."
        }
    },
    {
        "type": "shp",
        "art": "stealthy",
        "en": {
            "name": "Stealthy",

            "status": "rev",
            "text": "You have the option of deploying to any space that is not next to another ship.",

            "changes": {
                "text": "You may deploy to any space that is not adjacent to a ship.",
            }
        },
        "fr": {
            "name": "Furtif",

            "status": "rev",
            "text": "Vous avez la possibilité de vous déployer sur n'importe quelle case qui n'est pas près d'un autre vaisseau.",

            "changes": {
                "text": "Vous pouvez vous déployer sur toute case qui n'est pas près d'un autre vaisseau.",
            }
        }
    },
    {
        "type": "cbt",
        "art": "strategic",
        "en": {
            "name": "Strategic",

            "status": "rev",
            "text": "Any of your ships next to another one of your ships gets a -2 to every weapons or defenses combat roll (you can consider an attacker to be in either square).",

            "changes": {
                "text": "During combat if your ship is adjacent to one or more friendly ships, -2 to your Combat roll.",
            }
        },
        "fr": {
            "name": "Stratégique",

            "status": "rev",
            "text": "N'importe lequel de vos vaisseaux situé près d'un autre de vos vaisseaux bénéficie de -2 à chaque lancer de combat d'attaque ou de défense.",

            "changes": {
                "text": "Si un de vos vaisseaux est situé près d'un autre de vos vaisseaux, son jet de combat a un bonus de -2.",
            }
        }
    },
    {
        "type": "cbt",
        "art": "stubborn",
        "en": {
            "name": "Stubborn",
            "text": null,
            "status": "unchg",
            "original": "When you are attacked, ties go in your favor and you destroy your attacker if you win (and gain dominance).",

            "notes": null
        },
        "fr": {
            "name": "Obstiné",

            "status": "rev",
            "text": "En combat, lorsque vous êtes attaqué, en cas d'égalité: vous remportez la victoire, détruisez votre assaillant et gagnez 1 point de domination.",

            "changes": {
                "text": "Lorsque vous êtes attaqué, en cas d'égalité: vous remportez la victoire, détruisez votre assaillant et gagnez 1 en Domination.",
            }
        }
    },
    {
        "type": "act",
        "art": "tactical",
        "alt_art": "day job",
        "en": {
            "name": "Tactical",

            "status": "rev",
            "text": "Once per turn as a free action, move a ship a total of 1 space (you can attack with the move).",

            "changes": {
                "text": "Once per turn, you may move/attack 1 space with a ship even if it's already moved.",
            }
        },
        "fr": {
            "name": "Tactique",

            "status": "rev",
            "text": "Une fois par tour, gratuitement, déplacez l'un de vos vaisseaux d'une case (vous pouvez attaquer avec ce déplacement).",

            "changes": {
                "text": "Une fois par tour, vous pouvez effectuer un Déplacement (ou une Attaque) supplémentaire d'une case (même si le vaisseau s'est déjà déplacé).",
            }
        }
    },
    {
        "type": "act",
        "art": "hostile",
        "en": {
            "name": "Warlike",

            "status": "rev",
            "text": "When you destroy 1 or more enemy ships on your turn, you gain 1 extra action for that turn.",
            "changes": {
                "text": "The first time you destroy an enemy ship each turn, gain 1 action.",
                "name": "Hostile"

            }

        },
        "fr": {
            "name": "Belliqueux",

            "status": "rev",
            "text": "Lorsque vous détruisez 1 vaisseau ennemi ou plus pendant votre tour, vous gagnez une action supplémentaire pour ce tour.",

            "changes": {
                "name": "Hostile",
                "text": "À chaque tour, la première fois que vous détruisez un vaisseau ennemi, gagnez 1 action.",
            }

        }
    },

];