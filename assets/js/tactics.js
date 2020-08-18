export const quantum_card_tactics = [
    {

        "art": null,
        "playtesting": true,
        "en": {
            "name": "Black Market Cache",
            "text": "Gain 2 Missiles",
            "status": "new",
        },
        "fr": {
            "name": "Planque du Marché Noir",
            "text": "Gagnez 2 Missiles",
            "status": "new",
        }
    },
    {
        "art": null,
        "playtesting": true,
        "en": {
            "name": "Show of Force",
            "text": "Destroy any one ship. Gain 1 Dominance.",
            "status": "new",
            "notes": "Replacement for Aggression. Aggression lacked player interaction and could be quite narrow for some players not focusing on combat. Also gaining 2 Dominance is a pretty big deal, and could easily win you the game. This new card opens up some options of all players, espically dealing with fortified players. Lastly theme feels a much better."
        },
        "fr": {
            "name": "Démonstration de Force",
            "text": "Détruisez le vaisseau de votre choix. Gagnez 1 en Domination.",
            "status": "new",
            "notes": "Remplace Agression. Agression manquait d'interaction entre joueurs et pouvait s'avérer un peu pauvre pour les joueurs qui ne se concentrent pas sur les combats. De plus gagner 2 en Domination est plutôt une aubaine, et peu facilement vous faire gagner. Cette nouvelle carte offre de nouvelles options à tous les joueurs, en particulier en présence de joueurs retranchés. Enfin, cela colle mieux à la thématique."
        }
    },
    {
        "art": "admiral",
        "en": {
            "name": "Change of Heart",
            "text": "Search the Skill deck and take a card of your choosing, then shuffle the deck.",
            "status": "new",
            "notes": "The original game gave you very few tools to deal with a run-away player. Change of Heart can now help players search for the exact card they need to counter a problem player. Also, one of the most fun parts of this game is creating fun combos, this card helps players achieve this."
        },
        "fr": {
            "name": "Revirement",
            "text": "Prenez la carte de votre choix dans le deck de Compétences, puis mélangez le.",
            "status": "new",
            "notes": "Le jeu de base donnait peu d'outil pour rattraper un joueur largement en tête. Avec Revirement les joueurs peuvent aller chercher précisément la carte qui contrera un joueur problématique. De plus, une des aspects les plus amusants du jeu est de créer des combos intéressantes, et cette carte est une aide pour y arriver."
        }
    },
    {
        "art": "gate",
        "en": {
            "name": "Hypernet Gate",
            "text": "Place the Hypernet Gate tokens on two different spaces on the board. Any player who has played Hypernet Gate may consider those spaces adjacent.",
            "status": "new",
            "notes": "One of the first cards I designed. I really wanted to capture the feeling of warp gates in space. Mechanically this has done really well. Players have used it in interesting ways, such as sparking conflicts between two opposite players by linking their planets together."
        },
        "fr": {
            "name": "Portail Hypernet",
            "text": "Placez les jetons Portail Hypernet sur deux cases différentes du plateau. Les joueurs qui ont la carte Portail Hypernet peuvent considérer ces cases comme adjacentes.",
            "status": "new",
            "notes": "Une des premières cartes que j'ai mises au point. Je voulais vraiment rendre l'effet de portails de téléportation dans l'espace. Je suis satisfait de la mécanique. Les joueurs l'ont utilisée de manières intéressantes, comme par exemple pour créer un conflit entre deux joueurs éloignés en reliant leurs planètes."
        }
    },
    {
        "art": "planning",
        "en": {
            "name": "Plan Ahead",
            "text": "Until the end of your next turn, all your combat rolls are 1.",
            "status": "new",
            "notes": "Can be used defensively or to set up a big offense turn"
        },
        "fr": {
            "name": "Planification",
            "text": "Jusqu'à la fin de votre prochain tour, tous vos jets de combat valent 1.",
            "status": "new",
            "notes": "Peut être utilisée en défense ou pour préparer un tour très offensif."
        }
    },
    {
        "art": "sabotage",
        "en": {
            "name": "Sabotage",

            "status": "chg",
            "text": "All other players must immediately choose and discard one of their command cards.",
            "changes": {
                "art": "explode",
                "text": "Every opponent's next turn has 1 fewer actions.",
                "notes": "The original Sabotage lead to a lot of bad-feeling moments while also not providing much upside to the person selecting it. If there was a specific ability you wanted to remove from a player, this card did not help you get rid of it; The affected players would just select their worse card to remove. This card was also a 'win-more' card where it hurt players who were behind more than it hurt players that were ahead. This new version can help you get 'one turn ahead' of everyone else without crippling them, it can also be used to delay someone's winning turn."
            }

        },
        "fr": {
            "name": "Sabotage",
            "text": "Les joueurs adverses défaussent immédiatement une carte de commandement de leur choix.",
            "status": "chg",
            "changes": {
                "art": "explode",
                "text": "Le prochain tour de vos adversaires comporte une action de moins.",
                "notes": "La carte Sabotage d'origine apportait un sentiment global de gêne, sans apporter un grand avantage à celui qui la choisit. S'il y avait une compétence particulière que vous vouliez retirer d'un joueur, cette carte ne vous aidait pas; le joueur en question retirait simplement sa moins bonne carte. C'était aussi une carte 'gagner plus' qui embêtait plus les joueurs en retrait que ceux qui était en tête. Cette nouvelle version peut vous aider à avoir 'un tour d'avance' sur les autres sans les handicaper. Elle peut aussi remettre à plus tard le tour où un adversaire peut gagner."
            }


        }
    },
    {
        "art": "leaving",
        "en": {
            "name": "Unveil The Fleet",
            "text": "Destroy all your ships. You may reroll any ships in your scrapyard once. Deploy any number of ships.",
            "status": "new",
            "notes": "A flashier version of 'Reorganization'"
        },
        "fr": {
            "name": "Dévoiler la flotte",
            "text": "Détruisez tous vos vaisseaux. Vous pouvez relancer une fois chaque vaisseau de votre casse. Déployez autant de vaisseaux que vous voulez.",
            "status": "new",
            "notes": "Une version plus tape à l'oeil de Réorganisation."
        }
    },
    {
        "art": "aggression",
        "en": {
            "name": "Aggression",
            "status": "rev",
            "text": "Immediately add 2 to dominance",
            "changes": {
                "text": "Gain 2 Dominance",
            }
        },
        "fr": {
            "name": "Agression",
            "status": "rev",
            "text": "Ajoutez immédiatement 2 au dé de domination.",
            "changes": {
                "text": "Gagnez 2 en Domination",
            }

        }
    },
    {
        "art": "expansion",
        "en": {
            "name": "Expansion",
            "status": "rm",
            "text": "Immediately roll an expansion ship and put it in orbital position on a planet with one of your quantum cubes or in your scrapyard.",
            "notes": "The fleet expansion ability as a Tactic is odd. This ability should scale with the number of players, but it has a fixed number in the deck. In low player counts you can get flooded with Expansion cards you can't use, and in high player counts, it's difficult to expand when you want to. Expansion is just one path to victory, but it is over-represented in the Tactic deck. We feel moving it to it's own separate deck fixes these issues. See Rules for Expansion Deck."
        },
        "fr": {
            "name": "Expansion",
            "status": "rm",
            "text": "Vous ajoutez un vaisseau à votre flotte, soit en position orbitale autour d'une planète comportant un de vos cubes, soit dans la casse.",
            "notes": "La capacité d'expansion de flotte en tant que Tactique est étrange. Cette capacité devrait s'ajuster avec le nombre de joueur, mais il y en a un nombre fixe dans le deck. Avec peu de joueurs on se retrouve submergé avec les cartes Expansion inutilisables, et avec beaucoup de joueurs il est difficile de s'agrandir quand on le souhaite. Expansion est seulement une voie possible vers la victoire, mais elle est surreprésentée dans le deck des Tactiques. Nous pensons que les déplacer dans leur propre deck séparé règle ces problèmes. Voir règle sur le deck Expansion."
        }
    },
    {
        "art": "momentum",
        "en": {
            "name": "Momentum",
            "status": "unchg",
            "text": "Immediately take another turn, but with 2 actions instead of 3 (treat it as a brand-new turn).",
            "notes": "Great card. So many fun moments, especially with players that focus on research."
        },
        "fr": {
            "name": "Momentum",
            "status": "unchg",
            "text": "Jouez immédiatement un nouveau tour de deux actions au lieu de trois (considérez-le comme un tout nouveau tour).",
            "notes": "Très bonne carte. Tellement de bon moments, en particulier avec des joueurs qui se concentrent sur la recherche."
        }
    },
    {
        "art": "reorganization",
        "en": {
            "name": "Reorganization",
            "status": "rm",
            "text": "Place each rerolled ship either in orbital position on a planet that has one of your quantum cubes, or in your scrapyard.",
            "notes": "Replaced by 'Unveil the Fleet'"
        },
        "fr": {
            "name": "Réorganisation",
            "status": "rm",
            "text": "Placez chaque vaisseau relancé en position orbitale autour d'une planète comportant un de vos cubes ou dans votre casse.",
            "notes": "Remplacée par \"Réveler la flotte\"."
        }
    },
    {
        "art": "relocation",
        "en": {
            "name": "Relocation",
            "status": "rm",
            "text": "Move another playerâ€™s quantum cube to a planet without one of their cubes (the new planet cannot have a higher planet number).",
            "notes": "I've rarely seen a group use this card. Also, the benefit it provides to the game is not in line with the mechanically theme of the game, so it usefullness tends to be very opqaue to players, especially new ones. When it has been used, it usually immediately wins the game; A defending player heavily fortifies one of the last places the winning player needs to take to win, this card pops up and just shifts the state of the board suddenly. There's not really any counter-play to this card, you just have to hope it doesn't come up. Winning with it doesn't feel very good, you don't feel clever, just lucky."
        },
        "fr": {
            "name": "Repositionnement",
            "status": "rm",
            "text": "Déplacez un cube d'un adversaire sur une planète où il ne possède pas de cubes (la taille de la planète doit être inférieure ou égale à la planète d'origine).",
            "notes": "J'ai rarement vu un joueur utiliser cette carte. De plus, le bénéfice qu'elle apporte au jeu ne va pas avec la thématique/mécanique du jeu, et donc son utilité n'est pas évidente pour les joueurs, en particulier les débutants. Lorsqu'elle a été utilisée, elle permet souvent de gagner immédiatement; un joueur en position de défence fortifie encore plus un de ses derniers emplacements, un joueur en bonne position la prend pour pour accéder à la victoire, cette carte apparaît et change brutalement l'état du plateau. Il n'y a pas vraiment de riposte à cette carte, vous ne pouvez que souhaiter qu'elle n'apparaisse pas. Gagner grâce à elle n'est pas très satisfaisant, vous ne vous sentez pas malin, juste chanceux."
        }
    }
];