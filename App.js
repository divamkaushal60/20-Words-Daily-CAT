import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';

// ==================================================================
// PASTE YOUR VALIDATED JSON DATA HERE
// ==================================================================
const wordData = [
  {
    "id": 1,
    "word": "abandon",
    "meaning": "to give up",
    "synonyms": ["Desert", "Forsake", "Leave"],
    "antonyms": ["Retain"],
    "shown": false
  },
  {
    "id": 2,
    "word": "abase",
    "meaning": "to humiliate",
    "synonyms": ["Scorn", "Belittle", "Degrade"],
    "antonyms": ["Exalt", "Cherish"],
    "shown": false
  },
  {
    "id": 3,
    "word": "abate",
    "meaning": "to lessen; to subside",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 4,
    "word": "abbreviate",
    "meaning": "to shorten",
    "synonyms": ["Abridge", "Condense"],
    "antonyms": ["Expand", "Prolong"],
    "shown": false
  },
  {
    "id": 5,
    "word": "abdicate",
    "meaning": "to give up formally",
    "synonyms": ["Resign", "Renounce"],
    "antonyms": ["Retain", "Uphold"],
    "shown": false
  },
  {
    "id": 6,
    "word": "abdication",
    "meaning": "giving up control, authority",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 7,
    "word": "aberration",
    "meaning": "straying away from what is normal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 8,
    "word": "abet",
    "meaning": "to assist (normally a crime)",
    "synonyms": ["Conspire", "Connive"],
    "antonyms": ["Dissuade", "Deter"],
    "shown": false
  },
  {
    "id": 9,
    "word": "abhor",
    "meaning": "to hate; to detest",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 10,
    "word": "abide",
    "meaning": "be faithful; to endure",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 11,
    "word": "abjure",
    "meaning": "promise or swear to give up",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 12,
    "word": "ablution",
    "meaning": "washing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 13,
    "word": "abridgement",
    "meaning": "a short summary",
    "synonyms": ["Outline", "Abbreviation", "Summary", "Abstract"],
    "antonyms": ["Enlargement", "Expansion"],
    "shown": false
  },
  {
    "id": 14,
    "word": "abscond",
    "meaning": "to go away suddenly (to avoid arrest)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 15,
    "word": "abstruse",
    "meaning": "difficult to comprehend; obscure",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 16,
    "word": "abysmal",
    "meaning": "extremely bad",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 17,
    "word": "abyss",
    "meaning": "a bottomless pit, anything too deep to measure",
    "synonyms": ["Chasm"],
    "antonyms": ["Summit", "Elevation"],
    "shown": false
  },
  {
    "id": 18,
    "word": "accede",
    "meaning": "agree to",
    "synonyms": ["Assent", "Concur"],
    "antonyms": ["Refuse", "Dissent"],
    "shown": false
  },
  {
    "id": 19,
    "word": "acclaimed",
    "meaning": "welcomed with shouts and approval",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 20,
    "word": "accolade",
    "meaning": "praise; approval",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 21,
    "word": "accost",
    "meaning": "to approach and speak to",
    "synonyms": ["Greet"],
    "antonyms": ["Shun", "Avoid"],
    "shown": false
  },
  {
    "id": 22,
    "word": "accredit",
    "meaning": "to approve, certify",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 23,
    "word": "accomplice",
    "meaning": "a partner in crime",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 24,
    "word": "acquaint",
    "meaning": "to inform, to make familiar",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 25,
    "word": "acquit",
    "meaning": "to clear (a person) of a charge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 26,
    "word": "acrid",
    "meaning": "sharp (as in speech)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 27,
    "word": "acrimony",
    "meaning": "bitterness or harshness of speech or manner",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 28,
    "word": "acronym",
    "meaning": "word formed from the initial letters of a group of words",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 29,
    "word": "acumen",
    "meaning": "keenness of mind, insight",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 30,
    "word": "adage",
    "meaning": "an old saying, proverb",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 31,
    "word": "adamant",
    "meaning": "inflexible",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 32,
    "word": "addle",
    "meaning": "to become rotten; to become confused",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 33,
    "word": "adduce",
    "meaning": "to offer as example, reason or proof",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 34,
    "word": "adjudicate",
    "meaning": "to settle judicially",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 35,
    "word": "adjure",
    "meaning": "to beg; appeal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 36,
    "word": "admonish",
    "meaning": "to warn, reprove mildly",
    "synonyms": ["Leisure", "Rebuke"],
    "antonyms": ["Applaud", "Praise", "Compliment"],
    "shown": false
  },
  {
    "id": 37,
    "word": "admonitory",
    "meaning": "containing warning",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 38,
    "word": "ado",
    "meaning": "fuss, trouble",
    "synonyms": ["Bustle", "Commotion"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 39,
    "word": "adorn",
    "meaning": "add beauty; decorate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 40,
    "word": "adroit",
    "meaning": "skilful and clever",
    "synonyms": ["Proficient", "Dextrous"],
    "antonyms": ["Awkward", "Dull"],
    "shown": false
  },
  {
    "id": 41,
    "word": "adulteration",
    "meaning": "making impure, poorer in quality",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 42,
    "word": "advent",
    "meaning": "an arrival, coming",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 43,
    "word": "adventitious",
    "meaning": "coming from another source and not innate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 44,
    "word": "adversary",
    "meaning": "enemy, opponent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 45,
    "word": "adversity",
    "meaning": "misfortune, troubled state",
    "synonyms": ["Distress", "Ill luck"],
    "antonyms": ["Fortune"],
    "shown": false
  },
  {
    "id": 46,
    "word": "advert",
    "meaning": "to call attention to, refer to",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 47,
    "word": "aeon",
    "meaning": "eternity, immeasurable period",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 48,
    "word": "affable",
    "meaning": "polite and friendly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 49,
    "word": "affinity",
    "meaning": "close connection, relationship",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 50,
    "word": "affirm",
    "meaning": "to declare positively, to confirm",
    "synonyms": ["Assent", "Declare", "Assure"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 51,
    "word": "agape",
    "meaning": "the mouth open wide with surprise",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 52,
    "word": "aggravate",
    "meaning": "make worse; irritate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 53,
    "word": "agile",
    "meaning": "active; quick-moving",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 54,
    "word": "agog",
    "meaning": "eager; excited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 55,
    "word": "ail",
    "meaning": "trouble; be ill",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 56,
    "word": "alacrity",
    "meaning": "eager and cheerful readiness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 57,
    "word": "alcove",
    "meaning": "recess; partially enclosed place",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 58,
    "word": "alienate",
    "meaning": "cause to make unfriendly, to distance oneself",
    "synonyms": ["Estrange"],
    "antonyms": ["Familiarise"],
    "shown": false
  },
  {
    "id": 59,
    "word": "allay",
    "meaning": "to calm, quieten",
    "synonyms": ["Soothe", "Pacify"],
    "antonyms": ["Agitate", "Kindle"],
    "shown": false
  },
  {
    "id": 60,
    "word": "allegiance",
    "meaning": "duty; support; loyalty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 61,
    "word": "alleviate",
    "meaning": "make (pain) easier to bear",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 62,
    "word": "allocate",
    "meaning": "to set apart for a specific purpose",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 63,
    "word": "alloy",
    "meaning": "mixture of two or more metals",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 64,
    "word": "allure",
    "meaning": "to tempt with something desirable",
    "synonyms": ["Lure", "Inveigle"],
    "antonyms": ["Repel", "Deter", "Discourage"],
    "shown": false
  },
  {
    "id": 65,
    "word": "aloof",
    "meaning": "reserved; indifferent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 66,
    "word": "amalgamate",
    "meaning": "mix, combine, unite",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 67,
    "word": "ambient",
    "meaning": "surround on all sides",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 68,
    "word": "ambiguous",
    "meaning": "doubtful; uncertain",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 69,
    "word": "amble",
    "meaning": "leisurely walk",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 70,
    "word": "amiable",
    "meaning": "good natured",
    "synonyms": ["Gentle", "Pleasing", "Charming"],
    "antonyms": ["Sullen", "Churlish", "quarrelsome"],
    "shown": false
  },
  {
    "id": 71,
    "word": "amicable",
    "meaning": "friendly, peaceful",
    "synonyms": [],
    "antonyms": ["Warlike", "Argumentative"],
    "shown": false
  },
  {
    "id": 72,
    "word": "amnesia",
    "meaning": "partial or total loss of memory",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 73,
    "word": "amorphous",
    "meaning": "without definite form",
    "synonyms": ["Undefinable"],
    "antonyms": ["Crystalline", "definite"],
    "shown": false
  },
  {
    "id": 74,
    "word": "analogy",
    "meaning": "similarity in some way",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 75,
    "word": "anarchy",
    "meaning": "absence of government, political disorder",
    "synonyms": [],
    "antonyms": ["Order", "Discipline"],
    "shown": false
  },
  {
    "id": 76,
    "word": "ancillary",
    "meaning": "helping, subordinate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 77,
    "word": "anguish",
    "meaning": "severe suffering",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 78,
    "word": "animosity",
    "meaning": "feeling of strong dislike",
    "synonyms": ["Enmity", "Hostility", "Rancour", "Animus"],
    "antonyms": ["Amiability", "Friendliness"],
    "shown": false
  },
  {
    "id": 79,
    "word": "annihilate",
    "meaning": "to destroy completely",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 80,
    "word": "annuity",
    "meaning": "a fixed sum paid every year",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 81,
    "word": "annul",
    "meaning": "to do away with",
    "synonyms": [],
    "antonyms": ["Enforce"],
    "shown": false
  },
  {
    "id": 82,
    "word": "anoint",
    "meaning": "to put oil on as part of a ceremony",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 83,
    "word": "anomaly",
    "meaning": "departure from the usual",
    "synonyms": ["Abnormality"],
    "antonyms": ["Normality"],
    "shown": false
  },
  {
    "id": 84,
    "word": "anon",
    "meaning": "soon",
    "synonyms": [],
    "antonyms": ["Normality"],
    "shown": false
  },
  {
    "id": 85,
    "word": "antidote",
    "meaning": "medicine used against a poison or a disease",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 86,
    "word": "apiary",
    "meaning": "a place where bees are kept",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 87,
    "word": "appease",
    "meaning": "make quiet or calm",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 88,
    "word": "appraise",
    "meaning": "to assess the value, evaluate",
    "synonyms": ["Assess"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 89,
    "word": "apprehensive",
    "meaning": "unhappy feeling about future; anxious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 90,
    "word": "apprise",
    "meaning": "give notice; to inform",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 91,
    "word": "arcade",
    "meaning": "a covered passage (especially lined with shops)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 92,
    "word": "arcane",
    "meaning": "secret, mysterious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 93,
    "word": "archaic",
    "meaning": "ancient, old-fashioned",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 94,
    "word": "archives",
    "meaning": "collection of the historical records or documents of a government or organisation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 95,
    "word": "arid",
    "meaning": "dry and barren, dull",
    "synonyms": ["Parched", "Dry", "Bare"],
    "antonyms": ["Lush", "Fertile"],
    "shown": false
  },
  {
    "id": 96,
    "word": "arrogance",
    "meaning": "proud superior manner of behaviour",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 97,
    "word": "articulate",
    "meaning": "to express oneself in words clearly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 98,
    "word": "articulate",
    "meaning": "speak distinctly; connect by joints",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 99,
    "word": "artefact",
    "meaning": "a hand-made object",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 100,
    "word": "ascend",
    "meaning": "go or come up",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 101,
    "word": "ascendancy",
    "meaning": "dominance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 102,
    "word": "ascertain",
    "meaning": "get to know",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 103,
    "word": "ashen",
    "meaning": "deadly pale",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 104,
    "word": "asterisk",
    "meaning": "the star-shaped symbol (*)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 105,
    "word": "astringent",
    "meaning": "substance that shrinks",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 106,
    "word": "atheism",
    "meaning": "the belief that there is no god",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 107,
    "word": "atonement",
    "meaning": "repayment, death of Jesus, make amends",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 108,
    "word": "attune",
    "meaning": "bring into harmony",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 109,
    "word": "audacious",
    "meaning": "daring; foolishly bold; impudent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 110,
    "word": "august",
    "meaning": "majestic; venerable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 111,
    "word": "auspicious",
    "meaning": "favorable; successful; prosperous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 112,
    "word": "austere",
    "meaning": "severely moral and strict; simple and plain",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 113,
    "word": "auxiliary",
    "meaning": "helping; supporting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 114,
    "word": "aver",
    "meaning": "affirm; assert; prove; justify",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 115,
    "word": "aversion",
    "meaning": "strong dislike",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 116,
    "word": "avid",
    "meaning": "eager; greedy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 117,
    "word": "avow",
    "meaning": "admit; declare openly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 118,
    "word": "babble",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 119,
    "word": "bacchanalia",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 120,
    "word": "backlog",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 121,
    "word": "badger",
    "meaning": "to nag, annoy, an animal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 122,
    "word": "bait",
    "meaning": "to persecute; piece of food put in a trap to attract",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 123,
    "word": "baleful",
    "meaning": "harmful; ominous; causing evil",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 124,
    "word": "balk",
    "meaning": "obstacle; purposely to get on the way of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 125,
    "word": "banal",
    "meaning": "trite, commonplace",
    "synonyms": ["Inane", "Vapid"],
    "antonyms": ["Fresh", "Original", "New"],
    "shown": false
  },
  {
    "id": 126,
    "word": "barbaric",
    "meaning": "primitive, uncivilised, cruel",
    "synonyms": ["Savage", "Inhuman", "Tyrannical"],
    "antonyms": ["Civilised", "Humane", "Cultured"],
    "shown": false
  },
  {
    "id": 127,
    "word": "barrage",
    "meaning": "heavy attack",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 128,
    "word": "barrage",
    "meaning": "artificial obstacle built across a river",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 129,
    "word": "barren",
    "meaning": "not good enough; unable to have young ones without value",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 130,
    "word": "bashful",
    "meaning": "easily embarrassed",
    "synonyms": ["Shy", "Diffident"],
    "antonyms": ["Bold", "Adventurous", "Arrogant"],
    "shown": false
  },
  {
    "id": 131,
    "word": "bask",
    "meaning": "enjoy warmth and light",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 132,
    "word": "beacon",
    "meaning": "a light used for warning or guiding",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 133,
    "word": "benediction",
    "meaning": "something that promotes goodness or well-being",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 134,
    "word": "benefactor",
    "meaning": "person who has given help",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 135,
    "word": "benevolence",
    "meaning": "wish or activity in doing good",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 136,
    "word": "benign",
    "meaning": "kind and gentle; mild (climate)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 137,
    "word": "berate",
    "meaning": "scold sharply",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 138,
    "word": "bereave",
    "meaning": "to leave in a sad or lonely state, as by death",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 139,
    "word": "bereft",
    "meaning": "rob or dispossess of something (material)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 140,
    "word": "berserk",
    "meaning": "in or into a violent rage or frenzy",
    "synonyms": ["Wild", "Frenzied"],
    "antonyms": ["Calm", "Tranquil"],
    "shown": false
  },
  {
    "id": 141,
    "word": "besiege",
    "meaning": "to overwhelm, surround",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 142,
    "word": "besotted",
    "meaning": "made silly or stupid by love",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 143,
    "word": "bestial",
    "meaning": "like a beast",
    "synonyms": ["Brutish", "Savage", "Barbaric"],
    "antonyms": ["Civilised", "Cultured", "Learned"],
    "shown": false
  },
  {
    "id": 144,
    "word": "bewilder",
    "meaning": "puzzle; confuse",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 145,
    "word": "bigot",
    "meaning": "stubborn; narrow-minded person",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 146,
    "word": "bizarre",
    "meaning": "odd, grotesque",
    "synonyms": ["Eccentric", "Unexpected"],
    "antonyms": ["Plain", "Commonplace"],
    "shown": false
  },
  {
    "id": 147,
    "word": "bland",
    "meaning": "uninteresting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 148,
    "word": "blast",
    "meaning": "explosion; gust of wind",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 149,
    "word": "blatant",
    "meaning": "boldly conspicuous or obtrusive",
    "synonyms": [],
    "antonyms": ["Obscure", "Subtle", "Hidden"],
    "shown": false
  },
  {
    "id": 150,
    "word": "blatant",
    "meaning": "noisy and rough",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 151,
    "word": "blemish",
    "meaning": "to mar or spoil, a defect",
    "synonyms": ["Flaw", "Imperfection"],
    "antonyms": ["Embellishment"],
    "shown": false
  },
  {
    "id": 152,
    "word": "bogus",
    "meaning": "sham; counterfeit; not genuine",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 153,
    "word": "boisterous",
    "meaning": "loud; noisy; rough; lacking restraint",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 154,
    "word": "bolster",
    "meaning": "give greatly needed support",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 155,
    "word": "boorish",
    "meaning": "crude; offensive; rude",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 156,
    "word": "brainchild",
    "meaning": "a person's own idea",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 157,
    "word": "brash",
    "meaning": "hasty; rush; cheeky; saucy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 158,
    "word": "brass",
    "meaning": "an alloy of copper and zinc",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 159,
    "word": "bravado",
    "meaning": "pretended courage or feigned confidence",
    "synonyms": [],
    "antonyms": ["Cowardice"],
    "shown": false
  },
  {
    "id": 160,
    "word": "bravura",
    "meaning": "boldness, dashing style",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 161,
    "word": "brazen",
    "meaning": "shameless, bold",
    "synonyms": ["Daring"],
    "antonyms": ["Submissive", "Humble"],
    "shown": false
  },
  {
    "id": 162,
    "word": "breach",
    "meaning": "a violation, gap; opening; broken place; breaking",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 163,
    "word": "brittle",
    "meaning": "easily broken",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 164,
    "word": "broach",
    "meaning": "bring up; announce; begin to talk about",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 165,
    "word": "cacophony",
    "meaning": "harsh sound",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 166,
    "word": "cajole",
    "meaning": "use flattery or deceit; to persuade",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 167,
    "word": "callous",
    "meaning": "hardened, unyielding",
    "synonyms": ["Obdurate", "Insensible"],
    "antonyms": ["Compassionate", "Sympathetic"],
    "shown": false
  },
  {
    "id": 168,
    "word": "camaraderie",
    "meaning": "friendship",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 169,
    "word": "camouflage",
    "meaning": "a disguise in order to conceal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 170,
    "word": "candid",
    "meaning": "frank; straightforward",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 171,
    "word": "canon",
    "meaning": "a basic law or principle by which something is judged",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 172,
    "word": "cant",
    "meaning": "insincere talk; tilt; overturn",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 173,
    "word": "canvass",
    "meaning": "discuss thoroughly; sort of touting; try to get votes or support",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 174,
    "word": "cardinal",
    "meaning": "principal, chief, most important",
    "synonyms": ["Fundamental", "Vital"],
    "antonyms": ["Insignificant", "Negligible", "Minor"],
    "shown": false
  },
  {
    "id": 175,
    "word": "caricature",
    "meaning": "an exaggerated imitation of a person",
    "synonyms": ["Exaggeration", "Parody", "Mimicry"],
    "antonyms": ["Reality"],
    "shown": false
  },
  {
    "id": 176,
    "word": "catalyst",
    "meaning": "substance that causes speeding up",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 177,
    "word": "cataract",
    "meaning": "a large waterfall; an eye disease",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 178,
    "word": "catholic",
    "meaning": "comprehensive; universal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 179,
    "word": "caustic",
    "meaning": "biting; sarcastic",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 180,
    "word": "cede/cession",
    "meaning": "to surrender possession of, especially by treaty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 181,
    "word": "celerity",
    "meaning": "rapidity of motion or action",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 182,
    "word": "celestial",
    "meaning": "of the heavens and sky",
    "synonyms": ["Heavenly", "Divine"],
    "antonyms": ["Mortal", "Earthly", "Terrestrial"],
    "shown": false
  },
  {
    "id": 183,
    "word": "celibacy",
    "meaning": "complete sexual abstinence, the state of being unmarried",
    "synonyms": [],
    "antonyms": ["Matrimony"],
    "shown": false
  },
  {
    "id": 184,
    "word": "censure",
    "meaning": "expression of blame or disapproval; a rebuke",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 185,
    "word": "chaff",
    "meaning": "to tease good-naturedly; grain husk",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 186,
    "word": "charismatic",
    "meaning": "possessing spiritual grace, inspiring",
    "synonyms": [],
    "antonyms": ["Uninspiring"],
    "shown": false
  },
  {
    "id": 187,
    "word": "chisel",
    "meaning": "steel tool for shaping materials",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 188,
    "word": "chromatic",
    "meaning": "of colour",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 189,
    "word": "circumscribe",
    "meaning": "to draw line around; to limit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 190,
    "word": "clamor",
    "meaning": "shout; complain with a lot of noise",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 191,
    "word": "clerical",
    "meaning": "of the clergy or clerk",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 192,
    "word": "clientele",
    "meaning": "customers",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 193,
    "word": "clinch",
    "meaning": "settle conclusively",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 194,
    "word": "cling",
    "meaning": "to resist separation; hold tightly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 195,
    "word": "clot",
    "meaning": "half-solid lump formed from liquid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 196,
    "word": "coax",
    "meaning": "get somebody to do something by kindness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 197,
    "word": "coerce",
    "meaning": "compel or force to make obedient",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 198,
    "word": "cognizant",
    "meaning": "being fully aware of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 199,
    "word": "collusion",
    "meaning": "secret agreement for a deceitful purpose",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 200,
    "word": "comatose",
    "meaning": "of, like or in a coma, lethargic",
    "synonyms": ["Unconscious"],
    "antonyms": ["Alert"],
    "shown": false
  },
  {
    "id": 201,
    "word": "combustion",
    "meaning": "process of burning",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 202,
    "word": "comely",
    "meaning": "attractive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 203,
    "word": "commuter",
    "meaning": "person who travels regularly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 204,
    "word": "compatible",
    "meaning": "getting along or going together",
    "synonyms": [],
    "antonyms": ["Opposite", "Intolerant"],
    "shown": false
  },
  {
    "id": 205,
    "word": "conceal",
    "meaning": "hide; keep secret",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 206,
    "word": "concede",
    "meaning": "to admit as true, accept",
    "synonyms": ["Surrender", "Admit", "Own"],
    "antonyms": ["Deny", "Refuse", "Disagree"],
    "shown": false
  },
  {
    "id": 207,
    "word": "conceited",
    "meaning": "having an excessively high opinion of oneself",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 208,
    "word": "concise",
    "meaning": "brief and to the point",
    "synonyms": ["Compact", "Short", "Terse"],
    "antonyms": ["Diffuse", "Repetitive", "Wordy"],
    "shown": false
  },
  {
    "id": 209,
    "word": "concord",
    "meaning": "agreement or harmony",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 210,
    "word": "concur",
    "meaning": "agree in opinion; happen together",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 211,
    "word": "condense",
    "meaning": "increase in density, strength; make short",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 212,
    "word": "condone",
    "meaning": "forgive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 213,
    "word": "conduct",
    "meaning": "forgive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 214,
    "word": "congenital",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 215,
    "word": "conjure",
    "meaning": "forgive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 216,
    "word": "connive",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 217,
    "word": "conspicuous",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 218,
    "word": "constrain",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 219,
    "word": "constrict",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 220,
    "word": "construe",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 221,
    "word": "consume",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 222,
    "word": "conviction",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 223,
    "word": "cordial",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 224,
    "word": "correlate",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 225,
    "word": "corroboration",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 226,
    "word": "countenance",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 227,
    "word": "counterfeit",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 228,
    "word": "covetous",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 229,
    "word": "cower",
    "meaning": "",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 230,
    "word": "coy",
    "meaning": "shy, modest (esp of a girl)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 231,
    "word": "crass",
    "meaning": "stupid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 232,
    "word": "crease",
    "meaning": "line made by crushing white line on the ground in cricket; crush",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 233,
    "word": "cringe",
    "meaning": "to behave in an excessively servile way; flinch",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 234,
    "word": "cryptic",
    "meaning": "secret; with a hidden meaning",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 235,
    "word": "cumbersome",
    "meaning": "burdensome; heavy and awkward to carry",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 236,
    "word": "cupidity",
    "meaning": "greed; lust",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 237,
    "word": "curriculum",
    "meaning": "course of study",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 238,
    "word": "cursory",
    "meaning": "quick, hurried",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 239,
    "word": "curtail",
    "meaning": "make shorter than was planned",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 240,
    "word": "dabble",
    "meaning": "to play in water as with hands",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 241,
    "word": "daft",
    "meaning": "silly, inane",
    "synonyms": ["Idiotic", "Foolish"],
    "antonyms": ["Profound", "Wise", "Intelligent"],
    "shown": false
  },
  {
    "id": 242,
    "word": "dainty",
    "meaning": "pretty, delicate (food); difficult to please",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 243,
    "word": "dally",
    "meaning": "to deal carelessly (with), trifle",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 244,
    "word": "dearth",
    "meaning": "shortage",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 245,
    "word": "debacle",
    "meaning": "a breakup; overthrow; sudden disaster",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 246,
    "word": "debutante",
    "meaning": "a girl making her social debut",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 247,
    "word": "deciduous",
    "meaning": "ephemeral; of a tree shedding its leaves annually",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 248,
    "word": "decisive",
    "meaning": "that settles a dispute",
    "synonyms": [],
    "antonyms": ["Indecisive"],
    "shown": false
  },
  {
    "id": 249,
    "word": "declaim/declamation",
    "meaning": "to speak pompously or bombastically; protest loudly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 250,
    "word": "decorum",
    "meaning": "propriety; properness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 251,
    "word": "decree",
    "meaning": "order given by authority",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 252,
    "word": "decry",
    "meaning": "disapprove of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 253,
    "word": "defer",
    "meaning": "to postpone; to yield due to respect",
    "synonyms": ["Delay", "Adjourn"],
    "antonyms": ["Expedite", "Hasten", "Quicken"],
    "shown": false
  },
  {
    "id": 254,
    "word": "defiance",
    "meaning": "open disobedience or resistance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 255,
    "word": "defile",
    "meaning": "to pollute, to corrupt",
    "synonyms": [],
    "antonyms": ["Glorify"],
    "shown": false
  },
  {
    "id": 256,
    "word": "definitive",
    "meaning": "conclusive, final",
    "synonyms": ["Precise"],
    "antonyms": ["Vague", "Confused"],
    "shown": false
  },
  {
    "id": 257,
    "word": "deft",
    "meaning": "skilful",
    "synonyms": ["Adept", "Dexterous", "Agile"],
    "antonyms": ["Awkward", "Clumsy", "Inept"],
    "shown": false
  },
  {
    "id": 258,
    "word": "demean",
    "meaning": "to degrade",
    "synonyms": ["Humble"],
    "antonyms": ["Honow", "Revere"],
    "shown": false
  },
  {
    "id": 259,
    "word": "demur",
    "meaning": "to hesitate; raise objections",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 260,
    "word": "demure",
    "meaning": "decorous, modest",
    "synonyms": ["Coy", "Shy"],
    "antonyms": ["Brazen", "Impudent", "Shameless"],
    "shown": false
  },
  {
    "id": 261,
    "word": "denizen",
    "meaning": "an inhabitant or frequenter of a particular place",
    "synonyms": ["Citizen"],
    "antonyms": ["Alien", "Foreigner"],
    "shown": false
  },
  {
    "id": 262,
    "word": "denounce",
    "meaning": "condemn publicly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 263,
    "word": "deplete",
    "meaning": "use until none remains",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 264,
    "word": "depreciate",
    "meaning": "to lessen in value",
    "synonyms": ["Undervalue", "Lower", "Decry"],
    "antonyms": ["Boost", "Raise", "Praise"],
    "shown": false
  },
  {
    "id": 265,
    "word": "derivative",
    "meaning": "unoriginal; obtained from another source",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 266,
    "word": "derogatory",
    "meaning": "insulting; tending to damage",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 267,
    "word": "desiccant",
    "meaning": "substance used to absorb moisture",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 268,
    "word": "despicable",
    "meaning": "deserving scorn",
    "synonyms": ["Low", "Mean", "Cowardly"],
    "antonyms": ["High", "Noble", "Exalted"],
    "shown": false
  },
  {
    "id": 269,
    "word": "despot",
    "meaning": "an absolute ruler",
    "synonyms": ["Tyrant"],
    "antonyms": ["Democrat"],
    "shown": false
  },
  {
    "id": 270,
    "word": "deter",
    "meaning": "discourage; hinder",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 271,
    "word": "detraction",
    "meaning": "slandering; verbal attack; aspersion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 272,
    "word": "detriment",
    "meaning": "damage",
    "synonyms": ["Harm", "Hurt", "Injury"],
    "antonyms": ["Advantage", "Gain", "Interest"],
    "shown": false
  },
  {
    "id": 273,
    "word": "deviance",
    "meaning": "being different in moral standards (from normal)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 274,
    "word": "devious",
    "meaning": "not direct, roundabout, not honest",
    "synonyms": ["Cunning", "Underhand"],
    "antonyms": ["Straightforward", "Honest"],
    "shown": false
  },
  {
    "id": 275,
    "word": "dexterity",
    "meaning": "skill (esp. in handling)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 276,
    "word": "diffidence",
    "meaning": "shyness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 277,
    "word": "dilapidated",
    "meaning": "falling to pieces (due to a severe earthquake)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 278,
    "word": "dilate",
    "meaning": "speak comprehensively; become wider, large",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 279,
    "word": "dilatory",
    "meaning": "intended to delay",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 280,
    "word": "disabuse",
    "meaning": "to free from error",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 281,
    "word": "disallow",
    "meaning": "refuse to allow or accept as correct",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 282,
    "word": "discern",
    "meaning": "see with an effort but clearly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 283,
    "word": "discomfit",
    "meaning": "confuse; embarrass",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 284,
    "word": "discompose",
    "meaning": "to destroy the composure of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 285,
    "word": "discord",
    "meaning": "disagreement, quarrel, lack of harmony between musical notes",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 286,
    "word": "discourse",
    "meaning": "speech; lecture",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 287,
    "word": "discredit",
    "meaning": "refuse to believe",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 288,
    "word": "discreet",
    "meaning": "careful, prudent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 289,
    "word": "discrete",
    "meaning": "individually distinct",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 290,
    "word": "discretion",
    "meaning": "the freedom to make decisions",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 291,
    "word": "disdain",
    "meaning": "look on with contempt",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 292,
    "word": "disinter",
    "meaning": "dig up from the earth; reveal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 293,
    "word": "dislodge",
    "meaning": "remove from the place occupied",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 294,
    "word": "dismal",
    "meaning": "sad; gloomy; miserable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 295,
    "word": "disparate",
    "meaning": "essentially different",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 296,
    "word": "disproof",
    "meaning": "proof to the contrary",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 297,
    "word": "dissemble",
    "meaning": "speak or behave so as to hide something (in mind)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 298,
    "word": "dissent",
    "meaning": "have a different opinion; refuse to assent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 299,
    "word": "dissipate",
    "meaning": "waste or squander",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 300,
    "word": "dissolute",
    "meaning": "marked by indulgence in vices",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 301,
    "word": "dissolution",
    "meaning": "disintegration; looseness in morals",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 302,
    "word": "distraught",
    "meaning": "distracted violently; upset in mind",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 303,
    "word": "divergence",
    "meaning": "getting farther apart from a point",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 304,
    "word": "divulge",
    "meaning": "make known something secret",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 305,
    "word": "dogmatic",
    "meaning": "positive; certain; arbitrary; without room for discussion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 306,
    "word": "dolt",
    "meaning": "stupid fellow",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 307,
    "word": "dormant",
    "meaning": "in a state of inactivity but awaiting development",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 308,
    "word": "dote",
    "meaning": "show much fondness; center one's attention",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 309,
    "word": "drawl",
    "meaning": "slow way of speaking",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 310,
    "word": "drone",
    "meaning": "male bee; person who isn't self-employed",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 311,
    "word": "drowsiness",
    "meaning": "feeling sleepy; half asleep",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 312,
    "word": "drudge",
    "meaning": "to do hard, menial or monotonous work",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 313,
    "word": "dubious",
    "meaning": "feeling doubt or causing doubt",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 314,
    "word": "dud",
    "meaning": "useless person; something that fails",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 315,
    "word": "dupe",
    "meaning": "cheat; make a fool of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 316,
    "word": "duplicity",
    "meaning": "deliberate deception",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 317,
    "word": "dwarf",
    "meaning": "person or somebody much below the usual size",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 318,
    "word": "dynamo",
    "meaning": "a generator; something that produces electric current",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 319,
    "word": "earthenware",
    "meaning": "dishes made of baked clay",
    "synonyms": [],
    "antonyms": [],
    "shown": false

  },
  {
    "id": 320,
    "word": "earthy",
    "meaning": "coarse, unrefined behaviour, of the earth",
    "synonyms": [],
    "antonyms": ["Cultured", "Refined"],
    "shown": false
  },
  {
    "id": 321,
    "word": "eddy",
    "meaning": "circular or spiral movement (e.g., of wind), a current",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 322,
    "word": "edible",
    "meaning": "fit to be eaten; not poisonous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 323,
    "word": "efficacy",
    "meaning": "production of a desired result",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 324,
    "word": "egoism",
    "meaning": "selfishness",
    "synonyms": [],
    "antonyms": ["Asceticism"],
    "shown": false
  },
  {
    "id": 325,
    "word": "egotism",
    "meaning": "excessive reference to oneself in speaking or writing",
    "synonyms": ["Egoism", "Conceit"],
    "antonyms": ["Humility"],
    "shown": false
  },
  {
    "id": 326,
    "word": "egress",
    "meaning": "way out; exit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 327,
    "word": "elaborate",
    "meaning": "worked out with much care, in great detail",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 328,
    "word": "elan",
    "meaning": "spirited self-assurance",
    "synonyms": ["Vivacity", "Enthusiasm", "Exuberance"],
    "antonyms": ["Sobriety", "Depression"],
    "shown": false
  },
  {
    "id": 329,
    "word": "elegiac",
    "meaning": "sad, mournful",
    "synonyms": [],
    "antonyms": ["Happy"],
    "shown": false
  },
  {
    "id": 330,
    "word": "elegy",
    "meaning": "a lament; a melancholy composition",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 331,
    "word": "elicit",
    "meaning": "draw out",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 332,
    "word": "eloquence",
    "meaning": "fluent speaking; skillful use of language",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 333,
    "word": "emaciate",
    "meaning": "make thin and weak",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 334,
    "word": "emanate",
    "meaning": "to come forth, issue, as from a source",
    "synonyms": ["Emerge", "Originate"],
    "antonyms": ["Stop"],
    "shown": false
  },
  {
    "id": 335,
    "word": "embark",
    "meaning": "begin a journey or endeavor",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 336,
    "word": "embellish",
    "meaning": "make beautiful",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 337,
    "word": "embezzle",
    "meaning": "use in a wrong way for one's own benefit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 338,
    "word": "emend",
    "meaning": "to make scholarly corrections in a text",
    "synonyms": ["Correct", "Revise", "Rectify"],
    "antonyms": ["Corrupt", "Debase", "Spoil"],
    "shown": false
  },
  {
    "id": 339,
    "word": "emote",
    "meaning": "stir up; excite",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 340,
    "word": "emulate",
    "meaning": "to try to equal or surpass; copy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 341,
    "word": "encapsulate",
    "meaning": "enclose in capsule",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 342,
    "word": "encumbrance",
    "meaning": "burden, things that get in the way of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 343,
    "word": "endearing",
    "meaning": "making dear or liked",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 344,
    "word": "endorse",
    "meaning": "write one's name on the back of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 345,
    "word": "enduring",
    "meaning": "lasting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 346,
    "word": "engrave",
    "meaning": "impress deeply, carve",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 347,
    "word": "engrossing",
    "meaning": "taken up all the time or attention; writing in large or formal way",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 348,
    "word": "engulf",
    "meaning": "swallow up",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 349,
    "word": "enmity",
    "meaning": "hatred; being an enemy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 350,
    "word": "ennui",
    "meaning": "boredom",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 351,
    "word": "enormity",
    "meaning": "of great size, number, etc. huge; a serious crime",
    "synonyms": ["Vast", "Immense"],
    "antonyms": ["Smallness", "Insignificance"],
    "shown": false
  },
  {
    "id": 352,
    "word": "ensign",
    "meaning": "flag; badge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 353,
    "word": "entangle",
    "meaning": "put into difficulties; involve as in a tangle",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 354,
    "word": "enthrall",
    "meaning": "please greatly; enslave (fig.)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 355,
    "word": "entice",
    "meaning": "tempt or persuade",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 356,
    "word": "entreat",
    "meaning": "ask earnestly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 357,
    "word": "enunciate",
    "meaning": "pronounce (words); express a theory",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 358,
    "word": "enzyme",
    "meaning": "catalyst",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 359,
    "word": "eon",
    "meaning": "an extremely long, indefinite period of time",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 360,
    "word": "epitome",
    "meaning": "representative example; a typical model",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 361,
    "word": "equable",
    "meaning": "steady; regular",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 362,
    "word": "equilibrium",
    "meaning": "state of being balanced",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 363,
    "word": "eradicate",
    "meaning": "get rid of; pull up by the roots",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 364,
    "word": "erratic",
    "meaning": "irregular in behaviour or opinion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 365,
    "word": "erudite",
    "meaning": "learned; scholarly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 366,
    "word": "espouse",
    "meaning": "marry; give one's support to",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 367,
    "word": "etiquette",
    "meaning": "the forms, manners, etc. conventionally acceptable or required in society, profession, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 368,
    "word": "eulogy",
    "meaning": "formal praise; panegyric",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 369,
    "word": "euphoria",
    "meaning": "elation; state of pleasant excitement",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 370,
    "word": "euthanasia",
    "meaning": "easy and painless death",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 371,
    "word": "evasive",
    "meaning": "tending to evade",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 372,
    "word": "evoke",
    "meaning": "call up; bring out",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 373,
    "word": "exasperate",
    "meaning": "to irritate",
    "synonyms": ["Exacerbate", "Provoke"],
    "antonyms": ["Mollify", "Placate", "Conciliate"],
    "shown": false
  },
  {
    "id": 374,
    "word": "excerpt",
    "meaning": "a passage or extract from a book, film or piece of music",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 375,
    "word": "exhaustive",
    "meaning": "complete; thorough",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 376,
    "word": "exigency",
    "meaning": "emergency; an urgent situation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 377,
    "word": "exorbitant",
    "meaning": "much too high or great",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 378,
    "word": "expedient",
    "meaning": "likely to be useful for a purpose",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 379,
    "word": "exploit",
    "meaning": "brilliant achievement; develop, use selfishly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 380,
    "word": "extempore",
    "meaning": "without previous thought or preparation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 381,
    "word": "extinct",
    "meaning": "no longer active",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 382,
    "word": "extinguish",
    "meaning": "end the existence of; wipe or put out",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 383,
    "word": "extol",
    "meaning": "praise highly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 384,
    "word": "extort",
    "meaning": "obtain by threats, violence",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 385,
    "word": "extrovert",
    "meaning": "cheerful person",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 386,
    "word": "fallacious",
    "meaning": "based on error",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 387,
    "word": "falter",
    "meaning": "waver; move in an uncertain manner",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 388,
    "word": "fanciful",
    "meaning": "imaginary",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 389,
    "word": "fawn",
    "meaning": "young deer; try to win somebody's favor",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 390,
    "word": "feign",
    "meaning": "to pretend",
    "synonyms": ["Sham", "Dissemble", "Simulate", "Counterfeit"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 391,
    "word": "felon",
    "meaning": "person guilty of murder",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 392,
    "word": "femur",
    "meaning": "thighbone, long legs bone extending from the pelvis to the knee",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 393,
    "word": "ferment",
    "meaning": "undergo fermentation; become excited, commotion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 394,
    "word": "ferocity",
    "meaning": "savage cruelty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 395,
    "word": "fervor",
    "meaning": "warmth of feelings; earnestness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 396,
    "word": "feud",
    "meaning": "bitter quarrel over a long period of time",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 397,
    "word": "fidelity",
    "meaning": "loyalty; accuracy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 398,
    "word": "fidget",
    "meaning": "move restlessly; make nervous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 399,
    "word": "figurehead",
    "meaning": "carved image on the brow of a ship; nominal leader",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 400,
    "word": "finesse",
    "meaning": "delicate way of dealing with a situation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 401,
    "word": "finical",
    "meaning": "too fussy about food, clothing, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 402,
    "word": "finicky",
    "meaning": "finical",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 403,
    "word": "fission",
    "meaning": "splitting or division (esp. of cells)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 404,
    "word": "fixate",
    "meaning": "stare at",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 405,
    "word": "flak",
    "meaning": "criticism; anti-aircraft guns",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 406,
    "word": "flamboyant",
    "meaning": "brightly colored; florid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 407,
    "word": "flaunting",
    "meaning": "show off complacently",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 408,
    "word": "flax",
    "meaning": "pale; yellow (hair); a plant",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 409,
    "word": "fleet",
    "meaning": "number of ships; quick-moving",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 410,
    "word": "flop",
    "meaning": "fail; move; fall clumsily",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 411,
    "word": "florid",
    "meaning": "very much ornamented; naturally red (e.g., of face)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 412,
    "word": "flout",
    "meaning": "reject, mock; to go against (as in going against tradition)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 413,
    "word": "fluke",
    "meaning": "lucky stroke",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 414,
    "word": "fluster",
    "meaning": "make nervous or confused",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 415,
    "word": "foil",
    "meaning": "prevent from carrying out; contrast",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 416,
    "word": "foment",
    "meaning": "put something warm (to lessen the pain)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 417,
    "word": "foolproof",
    "meaning": "incapable of failure or error",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 418,
    "word": "forbear",
    "meaning": "refrain from; be patient; ancestor",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 419,
    "word": "forbearance",
    "meaning": "patience; willingness to wait",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 420,
    "word": "forensic",
    "meaning": "belonging to courts of judicature",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 421,
    "word": "forerunner",
    "meaning": "a sign that tells or warns of something to follow",
    "synonyms": ["Herald", "Harbinger", "Predecessor"],
    "antonyms": ["Successor", "Offspring"],
    "shown": false
  },
  {
    "id": 422,
    "word": "forfeit",
    "meaning": "suffer the loss of something",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 423,
    "word": "forge",
    "meaning": "workshop for the shaping of metal; to shape metal lead",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 424,
    "word": "forgery",
    "meaning": "counterfeit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 425,
    "word": "forte",
    "meaning": "that which one does particularly well",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 426,
    "word": "forthright",
    "meaning": "direct and frank",
    "synonyms": ["Outspoken", "Straightforward"],
    "antonyms": ["Obscure", "Veiled"],
    "shown": false
  },
  {
    "id": 427,
    "word": "foster",
    "meaning": "nurture; care for",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 428,
    "word": "fragile",
    "meaning": "easily injured, broken or destroyed",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 429,
    "word": "frantic",
    "meaning": "wildly excited with joy; anxiety",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 430,
    "word": "fraternal",
    "meaning": "brotherly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 431,
    "word": "fraudulent",
    "meaning": "based on or using fraud",
    "synonyms": ["Cheating", "Deceitful"],
    "antonyms": ["Honest"],
    "shown": false
  },
  {
    "id": 432,
    "word": "fray",
    "meaning": "to wear out by use, cloth etc.",
    "synonyms": ["Frazzle", "Tatter"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 433,
    "word": "frenzied",
    "meaning": "wildly, insanely, excited",
    "synonyms": ["Wild", "Frantic", "Hysterical"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 434,
    "word": "fret",
    "meaning": "worry; irritation; wear away",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 435,
    "word": "fringe",
    "meaning": "edge; ornamental border; part of hair over the forehead",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 436,
    "word": "frolicsome",
    "meaning": "light-hearted, gay",
    "synonyms": ["Playful", "Pranks"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 437,
    "word": "frugal",
    "meaning": "careful; economical",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 438,
    "word": "futile",
    "meaning": "useless",
    "synonyms": ["Trifling", "Trivial", "Vain"],
    "antonyms": ["Effective", "Satisfactory", "Fruitful"],
    "shown": false
  },
  {
    "id": 439,
    "word": "gala",
    "meaning": "a festivity, celebration, commemoration",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 440,
    "word": "gale",
    "meaning": "cyclone, hurricane, storm, tempest",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 441,
    "word": "gallant",
    "meaning": "brave, noble, attentive to ladies, amorous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 442,
    "word": "gallivant",
    "meaning": "(derogatory) to go about from one place to another in search of pleasure",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 443,
    "word": "galvanise",
    "meaning": "to stimulate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 444,
    "word": "gambol",
    "meaning": "frolic, play",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 445,
    "word": "gamut",
    "meaning": "the entire range or extent",
    "synonyms": ["Range", "Scope", "Purview"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 446,
    "word": "gape",
    "meaning": "to stare with open mouth, to be wide open",
    "synonyms": ["Gawk", "Ogle", "Peer"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 447,
    "word": "garish",
    "meaning": "gaudy",
    "synonyms": ["Ostentatious"],
    "antonyms": ["Sober", "Modest"],
    "shown": false
  },
  {
    "id": 448,
    "word": "garment",
    "meaning": "article of clothing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 449,
    "word": "garnish",
    "meaning": "to decorate",
    "synonyms": ["Embellish", "Adorn", "Beautify"],
    "antonyms": ["Spoil", "Disfigure", "Impair"],
    "shown": false
  },
  {
    "id": 450,
    "word": "gasket",
    "meaning": "a layer of packing material like a sheet of asbestos, etc. used for making gas-tight joints",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 451,
    "word": "gasp",
    "meaning": "to gape for breath",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 452,
    "word": "gawk",
    "meaning": "to stare stupidly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 453,
    "word": "gawky",
    "meaning": "clumsy",
    "synonyms": ["Awkward", "Ungainly"],
    "antonyms": ["Elegant"],
    "shown": false
  },
  {
    "id": 454,
    "word": "generic",
    "meaning": "of a whole class, kind or group",
    "synonyms": ["Typical", "Characteristic", "Common"],
    "antonyms": ["Individual", "Particular"],
    "shown": false
  },
  {
    "id": 455,
    "word": "genteel",
    "meaning": "polite or well bred",
    "synonyms": ["Polished", "Refined", "Cultured"],
    "antonyms": ["Rough", "Coarse", "Ill-bred"],
    "shown": false
  },
  {
    "id": 456,
    "word": "gentry",
    "meaning": "people of the upper class",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 457,
    "word": "gesticulate",
    "meaning": "to make lively gestures",
    "synonyms": ["Signal", "Pantomime"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 458,
    "word": "gibe",
    "meaning": "an insulting remark",
    "synonyms": ["Scoff", "Sneer", "Mock"],
    "antonyms": ["Praise", "Exalt", "Applaud"],
    "shown": false
  },
  {
    "id": 459,
    "word": "gild",
    "meaning": "to cover with gold or gold-like substance; gift",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 460,
    "word": "girth",
    "meaning": "circumferential measure of thickness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 461,
    "word": "gist",
    "meaning": "the point; general sense",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 462,
    "word": "gleam",
    "meaning": "to glow or shine, to flash",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 463,
    "word": "glib",
    "meaning": "ready and smooth but not sincere",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 464,
    "word": "glimmer",
    "meaning": "weak, unsteady light, twinkle",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 465,
    "word": "gloss",
    "meaning": "brightness, polish, radiance, luster, shine",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 466,
    "word": "gnarled",
    "meaning": "contorted, twisted, weatherbeaten, knotty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 467,
    "word": "gnaw",
    "meaning": "waste away; bite steadily",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 468,
    "word": "goad",
    "meaning": "something urging a person to action",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 469,
    "word": "gorge",
    "meaning": "eat greedily; narrow opening with a stream",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 470,
    "word": "gouge",
    "meaning": "tool for cutting grooves in wood; scoop out",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 471,
    "word": "grave",
    "meaning": "serious; requiring consideration",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 472,
    "word": "gravel",
    "meaning": "an assemblage of stones",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 473,
    "word": "graze",
    "meaning": "touch or scrape lightly in passing; feed on grass",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 474,
    "word": "grievous",
    "meaning": "causing grief or pain; serious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 475,
    "word": "grimace",
    "meaning": "make a distorted face",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 476,
    "word": "grit",
    "meaning": "persistence, stamina, pluck, determination",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 477,
    "word": "grovel",
    "meaning": "crawl; humble oneself",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 478,
    "word": "grueling",
    "meaning": "exhausting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 479,
    "word": "grumpy",
    "meaning": "peevish",
    "synonyms": ["Morose", "Irritable", "Surly"],
    "antonyms": ["Amicable", "Gentle"],
    "shown": false
  },
  {
    "id": 480,
    "word": "guild",
    "meaning": "an association for mutual aid/help",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 481,
    "word": "guise",
    "meaning": "external appearance, manner, behaviour, dress",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 482,
    "word": "gullible",
    "meaning": "easily tricked",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 483,
    "word": "gush",
    "meaning": "burst out suddenly; talk ardently",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 484,
    "word": "gust",
    "meaning": "outburst of feeling; sudden rain, wind, fire, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 485,
    "word": "gyrate",
    "meaning": "to move in a circular or spiral path",
    "synonyms": ["Spin", "Whirl", "Rotate"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 486,
    "word": "hack",
    "meaning": "cut roughly; hired horse",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 487,
    "word": "hardihood",
    "meaning": "resolute; courage and fortitude",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 488,
    "word": "harmonious",
    "meaning": "having parts arranged in an orderly, pleasing way",
    "synonyms": ["Agreeable", "Concordant", "Congruous"],
    "antonyms": ["Dissonant", "Opposed", "Incompatible"],
    "shown": false
  },
  {
    "id": 489,
    "word": "haughty",
    "meaning": "arrogant; conceited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 490,
    "word": "heady",
    "meaning": "intoxicating",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 491,
    "word": "heed",
    "meaning": "attention; give notice to",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 492,
    "word": "heinous",
    "meaning": "odious (of crime)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 493,
    "word": "hematology",
    "meaning": "the study of blood and its diseases",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 494,
    "word": "hereditary",
    "meaning": "of, or passed down by inheritance from an ancestor",
    "synonyms": ["Inherited", "Congenital"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 495,
    "word": "heresy",
    "meaning": "belief contrary to what is generally accepted",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 496,
    "word": "hermaphrodite",
    "meaning": "a person, animal or plant with sexual organs of both male and female",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 497,
    "word": "heterogeneous",
    "meaning": "made up of different kinds",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 498,
    "word": "heyday",
    "meaning": "the time of greater vigor, prosperity etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 499,
    "word": "hibernate",
    "meaning": "to spend the winter in a dormant state (of animals), to be inactive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 500,
    "word": "highbrow",
    "meaning": "person with superior tastes",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 501,
    "word": "hinder",
    "meaning": "to keep back, stop",
    "synonyms": ["Impede", "Obstruct", "Prevent"],
    "antonyms": ["Help", "Assist", "Further"],
    "shown": false
  },
  {
    "id": 502,
    "word": "hinterland",
    "meaning": "the land away from a river",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 503,
    "word": "hirsute",
    "meaning": "hairy; shaggy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 504,
    "word": "hoax",
    "meaning": "mischievous trick played on somebody for a joke",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 505,
    "word": "hobnob",
    "meaning": "to be on close terms (with the government)",
    "synonyms": [],
    "antonyms": ["Alienate", "Estrange"],
    "shown": false
  },
  {
    "id": 506,
    "word": "homicide",
    "meaning": "the killing of one person by another",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 507,
    "word": "hone",
    "meaning": "stone used for sharpening tools, sharpen",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 508,
    "word": "hoodwink",
    "meaning": "trick; mislead",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 509,
    "word": "hospitable",
    "meaning": "to give hospitality, welcoming to guests",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 510,
    "word": "hush",
    "meaning": "make or become silent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 511,
    "word": "husk",
    "meaning": "worthless outside part of anything (seed, fruit, etc.)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 512,
    "word": "hypocrisy",
    "meaning": "falsely making oneself appear to be good",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 513,
    "word": "icon",
    "meaning": "an image, figure, statue",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 514,
    "word": "idealism",
    "meaning": "behaviour or thought based on a conception of things as one thinks they should be",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 515,
    "word": "ignoramus",
    "meaning": "an ignorant person",
    "synonyms": ["Dunce", "Dolt", "Dope"],
    "antonyms": ["Genius", "Prodigy", "Scholar"],
    "shown": false
  },
  {
    "id": 516,
    "word": "illegible",
    "meaning": "hard or impossible to read because badly written or printed",
    "synonyms": ["Unreadable", "Indecipherable"],
    "antonyms": ["Legible", "Readable", "Decipherable"],
    "shown": false
  },
  {
    "id": 517,
    "word": "illicit",
    "meaning": "unlawful; forbidden",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 518,
    "word": "illusion",
    "meaning": "an unreal or misleading appearance or image",
    "synonyms": ["Fantasy", "Image"],
    "antonyms": ["Reality", "Fact"],
    "shown": false
  },
  {
    "id": 519,
    "word": "immaculate",
    "meaning": "pure; faultless",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 520,
    "word": "imminent",
    "meaning": "likely to come or happen soon",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 521,
    "word": "immune",
    "meaning": "exempt from or protected against something harmful",
    "synonyms": ["Exculpate", "Reprieve"],
    "antonyms": ["Condemn", "Convict", "Blame"],
    "shown": false
  },
  {
    "id": 522,
    "word": "impair",
    "meaning": "worsen; diminish in value",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 523,
    "word": "impassioned",
    "meaning": "filled with passion or zeal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 524,
    "word": "impassive",
    "meaning": "unmoved feeling; no sign of passion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 525,
    "word": "impeach",
    "meaning": "to accuse; to charge with a crime",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 526,
    "word": "impede",
    "meaning": "hinder; get in the way of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 527,
    "word": "impending",
    "meaning": "imminent; being about to happen; expected",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 528,
    "word": "imperative",
    "meaning": "urgent; essential",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 529,
    "word": "impermeable",
    "meaning": "that cannot be permeated",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 530,
    "word": "impertinent",
    "meaning": "given to insolent rudeness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 531,
    "word": "imperturbable",
    "meaning": "calm; not capable of being excited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 532,
    "word": "impervious",
    "meaning": "not allowing to pass through (of materials)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 533,
    "word": "implacable",
    "meaning": "incapable of being placated; unpleasable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 534,
    "word": "implicit",
    "meaning": "implied though not plainly expressed",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 535,
    "word": "improvise",
    "meaning": "to compose and perform without preparation",
    "synonyms": ["Extemporise", "Invent", "Compose"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 536,
    "word": "impudent",
    "meaning": "rash; indiscreet",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 537,
    "word": "inane",
    "meaning": "silly; senseless",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 538,
    "word": "inasmuch",
    "meaning": "since; because",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 539,
    "word": "incandescent",
    "meaning": "white, glowing or luminous with intense heat",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 540,
    "word": "incarcerate",
    "meaning": "to put in prison; to confine",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 541,
    "word": "incense",
    "meaning": "make angry",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 542,
    "word": "inception",
    "meaning": "act of beginning, start",
    "synonyms": ["Inauguration", "Beginning", "Origin"],
    "antonyms": ["Termination", "End", "Finish"],
    "shown": false
  },
  {
    "id": 543,
    "word": "incessant",
    "meaning": "often repeated; continual",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 544,
    "word": "incise",
    "meaning": "engrave; make a cut in",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 545,
    "word": "incite",
    "meaning": "stir up; rouse",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 546,
    "word": "incoherent",
    "meaning": "not logically connected, disjointed",
    "synonyms": ["Confused"],
    "antonyms": ["Clear", "Vivid"],
    "shown": false
  },
  {
    "id": 547,
    "word": "incongruous",
    "meaning": "out of place; not in harmony or agreement",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 548,
    "word": "incredible",
    "meaning": "seeming too unusual to be possible",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 549,
    "word": "inculcate",
    "meaning": "fix firmly by repetition",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 550,
    "word": "indeterminate",
    "meaning": "indefinite",
    "synonyms": [],
    "antonyms": ["Definite", "Clear"],
    "shown": false
  },
  {
    "id": 551,
    "word": "indignant",
    "meaning": "feeling or expressing anger especially at unjust or mean action",
    "synonyms": ["Anger", "Wrath", "Scorn"],
    "antonyms": ["Calm", "Cool", "Patient"],
    "shown": false
  },
  {
    "id": 552,
    "word": "indiscreet",
    "meaning": "to open in what one says or does",
    "synonyms": ["Brash", "Rash", "Reckless"],
    "antonyms": ["Wise"],
    "shown": false
  },
  {
    "id": 553,
    "word": "indistinct",
    "meaning": "not easily heard, seen",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 554,
    "word": "indolence",
    "meaning": "laziness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 555,
    "word": "indomitable",
    "meaning": "not easily discouraged or subdued",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 556,
    "word": "induct",
    "meaning": "to place formally in an office, a society, etc.",
    "synonyms": ["Install", "Initiate"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 557,
    "word": "indulge",
    "meaning": "gratify; give way to; satisfy; allow oneself",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 558,
    "word": "indulgent",
    "meaning": "inclined to indulge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 559,
    "word": "inebriated",
    "meaning": "intoxicated",
    "synonyms": ["Drunk", "Tipsy"],
    "antonyms": ["Sober", "Teetotal"],
    "shown": false
  },
  {
    "id": 560,
    "word": "inept",
    "meaning": "unskillful; said or done at the wrong time",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 561,
    "word": "ineptitude",
    "meaning": "quality of being unskillful",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 562,
    "word": "infirm",
    "meaning": "weak from age",
    "synonyms": ["Weak", "Languid", "Feeble"],
    "antonyms": ["Strong", "Powerful", "Tough"],
    "shown": false
  },
  {
    "id": 563,
    "word": "inflammatory",
    "meaning": "rousing excitement, anger, etc.",
    "synonyms": ["Incendiary", "Infuriating"],
    "antonyms": ["Reconciling", "Mitigating"],
    "shown": false
  },
  {
    "id": 564,
    "word": "inflict",
    "meaning": "to cause (wounds, pain etc.) suffering",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 565,
    "word": "infringe",
    "meaning": "to break (a law or pact)",
    "synonyms": ["Transgress", "Violate", "Trespass"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 566,
    "word": "infuriate",
    "meaning": "fill with fury or rage",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 567,
    "word": "infuse",
    "meaning": "put; pour; fill",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 568,
    "word": "ingenious",
    "meaning": "clever, resourceful",
    "synonyms": ["Skillful", "Inventive"],
    "antonyms": ["Unskilled", "Awkward", "Dull"],
    "shown": false
  },
  {
    "id": 569,
    "word": "ingest",
    "meaning": "take in by swallowing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 570,
    "word": "ingress",
    "meaning": "the act of entering; entrance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 571,
    "word": "inhibition",
    "meaning": "restraint, reserve",
    "synonyms": ["Repression", "Ban", "Opposition"],
    "antonyms": ["Approval", "Permission", "Accordance"],
    "shown": false
  },
  {
    "id": 572,
    "word": "inimitable",
    "meaning": "defying imitation; unmatchable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 573,
    "word": "insane",
    "meaning": "mentally ill or deranged, not sane",
    "synonyms": ["Mad", "Delirious", "Frenzied"],
    "antonyms": ["Sound", "Sane", "Normal"],
    "shown": false
  },
  {
    "id": 574,
    "word": "insensible",
    "meaning": "unconscious; unresponsive; unaffected",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 575,
    "word": "insignia",
    "meaning": "distinguishing marks as emblems of rank",
    "synonyms": ["Sign"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 576,
    "word": "insipid",
    "meaning": "without taste or flavor",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 577,
    "word": "insolent",
    "meaning": "boldly disrespectful, rude",
    "synonyms": ["Impudent", "Impertinent", "Offensive"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 578,
    "word": "insolvent",
    "meaning": "unable to pay debts; impoverished",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 579,
    "word": "interim",
    "meaning": "as an installment, provisional",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 580,
    "word": "intimate",
    "meaning": "to announce; to suggest or hint, close to (as in relations)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 581,
    "word": "intractable",
    "meaning": "not easily managed or controlled; unruly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 582,
    "word": "inundate",
    "meaning": "flood; cover by overflowing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 583,
    "word": "irate",
    "meaning": "angry",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 584,
    "word": "ire",
    "meaning": "anger",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 585,
    "word": "irksome",
    "meaning": "tiresome",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 586,
    "word": "irresolute",
    "meaning": "hesitating; undecided",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 587,
    "word": "jab",
    "meaning": "sneer, taunt, belittle",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 588,
    "word": "jabber",
    "meaning": "to talk quickly and incoherently",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 589,
    "word": "jabber",
    "meaning": "talk excitedly; utter rapidly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 590,
    "word": "jacuzzi",
    "meaning": "a special type of bath mechanism where water is agitated to give extra invigoration",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 591,
    "word": "jaded",
    "meaning": "bored, satiated, dulled",
    "synonyms": ["Inferior", "Wearied", "Listless", "Exhausted"],
    "antonyms": ["Refreshed", "Strengthened"],
    "shown": false
  },
  {
    "id": 592,
    "word": "jagged",
    "meaning": "uneven, rough edged, notched",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 593,
    "word": "jeer",
    "meaning": "to make fun of, deride; scoff; mock",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 594,
    "word": "jerk",
    "meaning": "a spasmodic muscle movement; clown; buffoon",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 595,
    "word": "jester",
    "meaning": "clown; buffoon",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 596,
    "word": "jibe",
    "meaning": "gibe; make fun of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 597,
    "word": "jittery",
    "meaning": "jumpy; nervous; shaky; anxious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 598,
    "word": "jockey",
    "meaning": "to manoeuvre, to position of advantage; horse rider",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 599,
    "word": "jocular",
    "meaning": "meant as a joke",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 600,
    "word": "jolt",
    "meaning": "to shake with a sudden jerk; startle",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 601,
    "word": "jostle",
    "meaning": "to hustle; to elbow",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 602,
    "word": "jovial",
    "meaning": "joyous; full of geniality",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 603,
    "word": "jubilant",
    "meaning": "shouting with joy; rejoicing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 604,
    "word": "jubilation",
    "meaning": "celebration; elation; euphoria; exultation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 605,
    "word": "judicious",
    "meaning": "sound in judgment; wise",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 606,
    "word": "junk",
    "meaning": "rubbish; garbage; trivia; trash",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 607,
    "word": "junta",
    "meaning": "a group of men united for some secret intrigue",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 608,
    "word": "jurisdiction",
    "meaning": "legal authority; extent of power",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 609,
    "word": "juvenile",
    "meaning": "young; childish; youthful; immature",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 610,
    "word": "keen",
    "meaning": "intense, sharp, vivid, acute",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 611,
    "word": "keepsake",
    "meaning": "gift, usually small and often not very costly, that is kept in memory of the giver",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 612,
    "word": "kennel",
    "meaning": "house for dogs, a pack of hounds",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 613,
    "word": "keynote",
    "meaning": "(i) the basic idea or ruling principle (ii) musical note",
    "synonyms": ["Theme", "Nub"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 614,
    "word": "killjoy",
    "meaning": "one who destroys or lessens other people's enjoyment",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 615,
    "word": "kiln",
    "meaning": "a furnace or oven for drying, burning or baking bricks, pottery, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 616,
    "word": "kimono",
    "meaning": "a traditional dress of Japan",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 617,
    "word": "kin",
    "meaning": "relative, family related as by blood",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 618,
    "word": "kindergarten",
    "meaning": "school for infants",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 619,
    "word": "kindle",
    "meaning": "to set fire to",
    "synonyms": ["Light", "Inflame", "Ignite"],
    "antonyms": ["Extinguish", "Discourage", "Snuffout"],
    "shown": false
  },
  {
    "id": 620,
    "word": "kingpin",
    "meaning": "chief, don, boss",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 621,
    "word": "kiosk",
    "meaning": "a small stall for the sale of newspapers, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 622,
    "word": "kit",
    "meaning": "apparatus, gear, outfit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 623,
    "word": "kith",
    "meaning": "kith and kin; friends and relations",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 624,
    "word": "kitty",
    "meaning": "pool of money to be played for",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 625,
    "word": "knack",
    "meaning": "dexterity, talent, proficiency, ability",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 626,
    "word": "knit",
    "meaning": "draw together; unite firmly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 627,
    "word": "kudos",
    "meaning": "credit for achievement, glory, fame",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 628,
    "word": "lacklustre",
    "meaning": "(of eyes) dull",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },

  {
    "id": 629,
    "word": "lag",
    "meaning": "(i) To fall behind, Not keep pace, Move slowly (ii) Imprison, Arrest (iii) A piece of non-conductive cover of a boiler to prevent heat transfer",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 630,
    "word": "lament",
    "meaning": "show, feel great sorrow",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 631,
    "word": "languish",
    "meaning": "To become weak, Droop, Be unhappy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 632,
    "word": "languid",
    "meaning": "without vigour or vitality",
    "synonyms": ["Pensive", "Drooping", "Lethargic"],
    "antonyms": ["Brisk", "Lively", "Vivacious"],
    "shown": false
  },
  {
    "id": 633,
    "word": "languor",
    "meaning": "Lack of vigour or vitality",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 634,
    "word": "latent",
    "meaning": "present but not visible or active; the latent force of an atomic bomb",
    "synonyms": ["Dormant", "Potential"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 635,
    "word": "lavish",
    "meaning": "giving or producing freely, liberally or generously",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 636,
    "word": "legacy",
    "meaning": "something handed down from ancestors",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 637,
    "word": "lethal",
    "meaning": "causing death",
    "synonyms": ["Deadly", "Fatal"],
    "antonyms": ["Harmless"],
    "shown": false
  },
  {
    "id": 638,
    "word": "lewd",
    "meaning": "pertaining to lust, indecent",
    "synonyms": ["Obscene", "Lustful", "Licentious"],
    "antonyms": ["Pure", "Chaste"],
    "shown": false
  },
  {
    "id": 639,
    "word": "liberality",
    "meaning": "free giving; generosity",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 640,
    "word": "limp",
    "meaning": "lacking strength; walking unevenly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 641,
    "word": "limpid",
    "meaning": "transparent; absolutely serene and untroubled",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 642,
    "word": "lingo",
    "meaning": "a dialect, jargon etc., that one is not familiar with",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 643,
    "word": "listless",
    "meaning": "characterised by lack of interest, energy or spirit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 644,
    "word": "lithe",
    "meaning": "bending, twisting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 645,
    "word": "litigate",
    "meaning": "to contest in a lawsuit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 646,
    "word": "livid",
    "meaning": "(i) Discoloured by a bruise, Black and blue (ii) Furiously angry",
    "synonyms": ["Discoloured", "Angry"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 647,
    "word": "loathe",
    "meaning": "To feel intense dislike or disgust for",
    "synonyms": ["Detest", "Abhor", "Abominate"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 648,
    "word": "loll",
    "meaning": "rest; to sit or stand in a lazy way; hang (dog's tongue)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 649,
    "word": "lucid",
    "meaning": "clear, readily understood",
    "synonyms": ["Clear", "Intelligible"],
    "antonyms": ["Incomprehensible", "Irrational", "Illegible"],
    "shown": false
  },
  {
    "id": 650,
    "word": "lull",
    "meaning": "become quiet or less active",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 651,
    "word": "lumber",
    "meaning": "move in a clumsy, noisy way",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 652,
    "word": "luminary",
    "meaning": "star; light-giving body",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 653,
    "word": "lurk",
    "meaning": "be out of view, ready to attack",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 654,
    "word": "lustrous",
    "meaning": "being bright, polished",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 655,
    "word": "machination",
    "meaning": "plot; scheme (esp. evil)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 656,
    "word": "maestro",
    "meaning": "a master in an art, especially a great conductor or composer of music",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 657,
    "word": "magnanimous",
    "meaning": "generous",
    "synonyms": [],
    "antonyms": ["Selfish", "Mean", "Miserly"],
    "shown": false
  },
  {
    "id": 658,
    "word": "magnate",
    "meaning": "important person in any field",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 659,
    "word": "malady",
    "meaning": "disease, Illness",
    "synonyms": ["Illness", "Disorder", "Ailment"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 660,
    "word": "malice",
    "meaning": "active ill will, desire to harm another",
    "synonyms": ["Spite", "Grudge", "Hatred"],
    "antonyms": ["Benevolence", "Goodwill"],
    "shown": false
  },
  {
    "id": 661,
    "word": "malign",
    "meaning": "injurious; speak ill of somebody; tell lie",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 662,
    "word": "malinger",
    "meaning": "to fake illness or injury in order to shirk a duty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 663,
    "word": "malleable",
    "meaning": "yielding easily; can be moulded; adapting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 664,
    "word": "malodorous",
    "meaning": "producing a bad odour, stinking",
    "synonyms": ["Foul", "Noxious"],
    "antonyms": ["Fragrant"],
    "shown": false
  },
  {
    "id": 665,
    "word": "mandatory",
    "meaning": "authoritatively commanded",
    "synonyms": ["Compulsory"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 666,
    "word": "massacre",
    "meaning": "cruel killing of a large number of people",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 667,
    "word": "matriculation",
    "meaning": "be admitted, enter a university as a student",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 668,
    "word": "maul",
    "meaning": "hurt by rough handling",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 669,
    "word": "mediocre",
    "meaning": "ordinary, Average",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 670,
    "word": "melancholy",
    "meaning": "very sad and depressed state",
    "synonyms": ["Dispirited", "Sorrowful"],
    "antonyms": ["Happy", "Merry"],
    "shown": false
  },
  {
    "id": 671,
    "word": "mendacity",
    "meaning": "dishonesty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 672,
    "word": "mendicant",
    "meaning": "a beggar",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 673,
    "word": "mercurial",
    "meaning": "quick, changeable in character; fleeting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 674,
    "word": "mesmerise",
    "meaning": "hypnotise",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 675,
    "word": "metamorphosis",
    "meaning": "transformation",
    "synonyms": ["Conversion", "Change"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 676,
    "word": "meticulous",
    "meaning": "giving great attention to details",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 677,
    "word": "mettle",
    "meaning": "quality of endurance or courage",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 678,
    "word": "mettlesome",
    "meaning": "courageous; high-spirited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 679,
    "word": "mince",
    "meaning": "pronounce or speak affectedly; euphemise; pound to a pulp",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 680,
    "word": "mischievous",
    "meaning": "harmful; causing mischief",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 681,
    "word": "miscreant",
    "meaning": "heretical; villainous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 682,
    "word": "miser",
    "meaning": "person who loves wealth and spends little; frugal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 683,
    "word": "missive",
    "meaning": "letter",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 684,
    "word": "moderation",
    "meaning": "quality of being limited; not extreme",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 685,
    "word": "mollify",
    "meaning": "make calmer or quieter",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 686,
    "word": "molt",
    "meaning": "moult; lose hair, feathers before new growing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 687,
    "word": "morbid",
    "meaning": "diseased; unhealthy (e.g., about ideas)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 688,
    "word": "mordant",
    "meaning": "biting and caustic; incisive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 689,
    "word": "morose",
    "meaning": "ill-tempered, unsocial",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 690,
    "word": "muffler",
    "meaning": "cloth worn round the neck; silencer",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 691,
    "word": "multifarious",
    "meaning": "varied; motley; greatly diversified",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 692,
    "word": "mundane",
    "meaning": "worldly as opposed to spiritual; commonplace; everyday",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 693,
    "word": "myriad",
    "meaning": "very great number",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 694,
    "word": "nadir",
    "meaning": "lowest, weakest point",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 695,
    "word": "nag",
    "meaning": "to find fault with",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 696,
    "word": "naive",
    "meaning": "Unaffectedly simple",
    "synonyms": ["Artless", "Innocent", "Unsophisticated"],
    "antonyms": ["Cunning", "Shrewd", "Sly"],
    "shown": false
  },
  {
    "id": 697,
    "word": "narcotic",
    "meaning": "a drug such as morphine, used to relieve pain and induce sleep",
    "synonyms": ["Dope", "Opiate", "Drug"],
    "antonyms": ["Stimulant"],
    "shown": false
  },
  {
    "id": 698,
    "word": "nascent",
    "meaning": "coming into existence; emerging",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 699,
    "word": "natal",
    "meaning": "of or relating to one's birth",
    "synonyms": [],
    "antonyms": ["Mortal"],
    "shown": false
  },
  {
    "id": 700,
    "word": "nautical",
    "meaning": "of sailors, ships or navigation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 701,
    "word": "negligent",
    "meaning": "taking too little care",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 702,
    "word": "nervy",
    "meaning": "bold or brash; nervous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 703,
    "word": "neurotic",
    "meaning": "having neurosis (a functional derangement caused by disorder of the nervous system)",
    "synonyms": [],
    "antonyms": ["Sane", "Poised", "Rational"],
    "shown": false
  },
  {
    "id": 704,
    "word": "nexus",
    "meaning": "a connection, tie or link",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 705,
    "word": "nibble",
    "meaning": "take little bites",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 706,
    "word": "nocturnal",
    "meaning": "of or in the night",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 707,
    "word": "nomenclature",
    "meaning": "the system of naming used in a science, etc.",
    "synonyms": ["Terminology"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 708,
    "word": "nonentity",
    "meaning": "a person or thing of little or no importance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 709,
    "word": "notorious",
    "meaning": "widely known especially unfavourably",
    "synonyms": ["Ill-famed", "Infamous", "Dishonourable"],
    "antonyms": ["Good", "Virtuous", "Honest"],
    "shown": false
  },
  {
    "id": 710,
    "word": "noxious",
    "meaning": "harmful",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 711,
    "word": "nuptial",
    "meaning": "of marriage or wedding",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 712,
    "word": "obese",
    "meaning": "corpulet, fat",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 713,
    "word": "oblivious",
    "meaning": "unaware; having no memory",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 714,
    "word": "obnoxious",
    "meaning": "odiously or disgustingly objectionable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 715,
    "word": "obstinate",
    "meaning": "determined to have one's own way, Stubborn",
    "synonyms": ["Head-Strong"],
    "antonyms": ["Obliging", "Yielding", "Flexible"],
    "shown": false
  },
  {
    "id": 716,
    "word": "obtain",
    "meaning": "to be established; accepted or customary",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 717,
    "word": "obtrusive",
    "meaning": "projecting; prominent; undesirably noticeable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 718,
    "word": "obtuse",
    "meaning": "blunt; stupid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 719,
    "word": "occluded",
    "meaning": "blocked up",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 720,
    "word": "octogenarian",
    "meaning": "a person between the ages of eighty and ninety",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 721,
    "word": "odious",
    "meaning": "repulsive; hateful",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 722,
    "word": "odium",
    "meaning": "contempt; dislike; aversion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 723,
    "word": "odor",
    "meaning": "smell; favor; reputation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 724,
    "word": "offal",
    "meaning": "waste or by-product of a process; rubbish",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 725,
    "word": "ogle",
    "meaning": "to keep looking at flirtatiously",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 726,
    "word": "ominous",
    "meaning": "threatening",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 727,
    "word": "onus",
    "meaning": "a burden, unpleasant duty etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 728,
    "word": "opaqueness",
    "meaning": "dullness; not allowing light to pass through",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 729,
    "word": "opinionated",
    "meaning": "holding obstinately to one's opinions",
    "synonyms": ["Obstinate", "Dogmatic"],
    "antonyms": ["Open-minded"],
    "shown": false
  },
  {
    "id": 730,
    "word": "opportune",
    "meaning": "suitable, said of time",
    "synonyms": ["Appropriate"],
    "antonyms": ["Untimely", "Unsuitable", "Inappropriate"],
    "shown": false
  },
  {
    "id": 731,
    "word": "opulent",
    "meaning": "Having much wealth, rich",
    "synonyms": ["Affuence", "Wealth"],
    "antonyms": ["Poverty", "Penury", "Frugality"],
    "shown": false
  },
  {
    "id": 732,
    "word": "outlandish",
    "meaning": "very odd or strange",
    "synonyms": ["Strange", "Odd", "Peculiar"],
    "antonyms": ["Normal", "Well mannered"],
    "shown": false
  },
  {
    "id": 733,
    "word": "overhaul",
    "meaning": "examine thoroughly; to learn about the condition",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 734,
    "word": "palate",
    "meaning": "roof of the mouth; sense of taste",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 735,
    "word": "palatial",
    "meaning": "magnificent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 736,
    "word": "palliate",
    "meaning": "lessen the severity of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 737,
    "word": "palpability",
    "meaning": "can be felt, touched, understood",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 738,
    "word": "paradigm",
    "meaning": "a model; example or pattern",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 739,
    "word": "paraphrase",
    "meaning": "express meaning in different words",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 740,
    "word": "parasol",
    "meaning": "umbrella used as a sunshade, especially by women",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 741,
    "word": "pariah",
    "meaning": "an outcast; a rejected and despised person",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 742,
    "word": "partisan",
    "meaning": "one-sided; committed to a party; biased or prejudiced",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 743,
    "word": "pathos",
    "meaning": "emotion of sympathetic pity",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 744,
    "word": "patron",
    "meaning": "regular customer; person who gives support",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 745,
    "word": "paucity",
    "meaning": "scarcity; a lacking of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 746,
    "word": "pedestrian",
    "meaning": "commonplace; trite; unremarkable, person who walks",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 747,
    "word": "peevish",
    "meaning": "bad-tempered; irritable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 748,
    "word": "penchant",
    "meaning": "strong inclination; a liking",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 749,
    "word": "penitent",
    "meaning": "feeling or showing regret",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 750,
    "word": "penurious",
    "meaning": "poor; stingy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 751,
    "word": "penury",
    "meaning": "extreme poverty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 752,
    "word": "perilous",
    "meaning": "dangerous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 753,
    "word": "perish",
    "meaning": "be destroyed; decay",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 754,
    "word": "perky",
    "meaning": "cheerful and lively",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 755,
    "word": "permeate",
    "meaning": "spread into every part of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 756,
    "word": "pernicious",
    "meaning": "harmful; injurious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 757,
    "word": "perpetrate",
    "meaning": "be guilty; commit (a crime)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 758,
    "word": "perquisite",
    "meaning": "gratuity or tip",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 759,
    "word": "personable",
    "meaning": "pleasing in appearance; attractive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 760,
    "word": "pertain",
    "meaning": "belong as a part; have reference",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 761,
    "word": "pervade",
    "meaning": "diffuse",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 762,
    "word": "pest",
    "meaning": "destructive thing or a person who is a nuisance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 763,
    "word": "petrified",
    "meaning": "power (to think, feel, act) taken away, scared",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 764,
    "word": "petrify",
    "meaning": "to make hard, rocklike; frighten",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 765,
    "word": "phoney",
    "meaning": "not genuine",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 766,
    "word": "piety",
    "meaning": "the quality of being religious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 767,
    "word": "pinch",
    "meaning": "be too tight; take between the thumb and finger",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 768,
    "word": "pine",
    "meaning": "waste away through sorrow or illness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 769,
    "word": "pious",
    "meaning": "dutiful to parents; devoted to religion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 770,
    "word": "pitfall",
    "meaning": "covered hole as a trap; unsuspected danger",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 771,
    "word": "pith",
    "meaning": "essential part; soft liquid substance; inner core of stems in plants",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 772,
    "word": "pivotal",
    "meaning": "of great importance (others depend on it)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 773,
    "word": "placate",
    "meaning": "soothe; pacify; calm",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 774,
    "word": "placid",
    "meaning": "serenely free of interruption or disturbance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 775,
    "word": "plaintive",
    "meaning": "mournful melancholy; sorrowful",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 776,
    "word": "plaque",
    "meaning": "flat metal on a wall as a memorial",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 777,
    "word": "plea",
    "meaning": "request",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 778,
    "word": "plead",
    "meaning": "address a court of law as an advocate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 779,
    "word": "plethora",
    "meaning": "excess",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 780,
    "word": "pliant",
    "meaning": "pliable; easily bent, shaped or twisted",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 781,
    "word": "plod",
    "meaning": "continue doing something without resting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 782,
    "word": "pluck",
    "meaning": "pull the feathers off; pick (e.g., flowers)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 783,
    "word": "plunge",
    "meaning": "move quickly, suddenly and with force",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 784,
    "word": "poncho",
    "meaning": "large piece of cloth",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 785,
    "word": "portent",
    "meaning": "omen; marvellous; threatening",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 786,
    "word": "postulate",
    "meaning": "to claim; to assume as true, existent or necessary",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 787,
    "word": "prattle",
    "meaning": "chatter; to utter or make meaningless sounds",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 788,
    "word": "precarious",
    "meaning": "uncertain; risky; dangerous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 789,
    "word": "precipitous",
    "meaning": "steep",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 790,
    "word": "précis",
    "meaning": "concise summary",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 791,
    "word": "precursory",
    "meaning": "preliminary; anticipating",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 792,
    "word": "predominate",
    "meaning": "have more power than others",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 793,
    "word": "preen",
    "meaning": "tidy; show self-satisfaction",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 794,
    "word": "premature",
    "meaning": "doing or happening of something before the right time",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 795,
    "word": "preponderance",
    "meaning": "greatness in number, strength, weight",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 796,
    "word": "prevalent",
    "meaning": "common",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 797,
    "word": "prim",
    "meaning": "neat; formal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 798,
    "word": "pristine",
    "meaning": "primitive; unspoiled; pure as in earlier times",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 799,
    "word": "procrastination",
    "meaning": "to keep putting off",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 800,
    "word": "prodigal",
    "meaning": "wasteful; reckless with money",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 801,
    "word": "prodigy",
    "meaning": "a person with a special talent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 802,
    "word": "profuse",
    "meaning": "abundant; lavish",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 803,
    "word": "progeny",
    "meaning": "descendants; children",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 804,
    "word": "prone",
    "meaning": "prostrate; inclined to (undesirable things)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 805,
    "word": "propagation",
    "meaning": "increasing the number; spreading; extending",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 806,
    "word": "provident",
    "meaning": "frugal; looking to the future",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 807,
    "word": "provisional",
    "meaning": "of the present time only",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 808,
    "word": "provoke",
    "meaning": "make angry",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 809,
    "word": "prudence",
    "meaning": "careful; forethought",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 810,
    "word": "prudish",
    "meaning": "easily shocked; excessively modest",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 811,
    "word": "prune",
    "meaning": "dried plum; silly person, shorten",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 812,
    "word": "pry",
    "meaning": "inquire too curiously",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 813,
    "word": "pseudonym",
    "meaning": "a false name",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 814,
    "word": "pummel",
    "meaning": "to pound or beat",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 815,
    "word": "pungency",
    "meaning": "sharpness; stinging quality",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 816,
    "word": "pungent",
    "meaning": "marked by a sharp incisive quality; caustic",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 817,
    "word": "punitive",
    "meaning": "inflicting, involving or aiming at punishment",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 818,
    "word": "pyre",
    "meaning": "large pile of wood for burning",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 819,
    "word": "quack",
    "meaning": "person dishonestly claiming",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 820,
    "word": "quaff",
    "meaning": "drink deeply",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 821,
    "word": "qualm",
    "meaning": "feeling of doubt; temporary feeling of sickness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 822,
    "word": "quash",
    "meaning": "to annul, cancel, smother",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 823,
    "word": "queer",
    "meaning": "odd, strange, bizarre, erratic",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 824,
    "word": "quell",
    "meaning": "suppress; subdue",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 825,
    "word": "quench",
    "meaning": "satisfy, satiate, allay",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 826,
    "word": "quilt",
    "meaning": "banquet cover, warmer",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 827,
    "word": "quip",
    "meaning": "A witty or sarcastic remark",
    "synonyms": ["Sally", "Retort", "Jest"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 828,
    "word": "quirk",
    "meaning": "habit or action peculiar to somebody or something",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 829,
    "word": "quorum",
    "meaning": "minimum number of people who have to be present to make the vote valid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 830,
    "word": "rabble",
    "meaning": "mob; crowd; the lower classes of populace",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 831,
    "word": "racket",
    "meaning": "a noisy confusion",
    "synonyms": ["Noise", "Clamour", "Commotion"],
    "antonyms": ["Peace", "Quietude", "Harmony"],
    "shown": false
  },
  {
    "id": 832,
    "word": "racy",
    "meaning": "full of zest or vigor; piquant",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 833,
    "word": "rake",
    "meaning": "dissolute person; libertine, sweep, an instrument to gather leaves, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 834,
    "word": "rally",
    "meaning": "(i) To come together to support (ii) Give new strength (iii) Gathering or assembly (iv) A contest of motor vehicle endurance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 835,
    "word": "ramble",
    "meaning": "to move aimlessly from place to place",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 836,
    "word": "rampant",
    "meaning": "widespread, raging",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 837,
    "word": "rancid",
    "meaning": "having the bad smell or taste of stale fats or oils, Spoiled",
    "synonyms": ["Stinking", "Offensive", "Decaying"],
    "antonyms": ["Sweet", "Fresh", "Fragrant"],
    "shown": false
  },
  {
    "id": 838,
    "word": "ransack",
    "meaning": "to plunder, Pillage",
    "synonyms": ["Rummage"],
    "antonyms": ["Restore", "Compensate", "Redress"],
    "shown": false
  },
  {
    "id": 839,
    "word": "rant",
    "meaning": "use extravagant language",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 840,
    "word": "rapport",
    "meaning": "sympathetic relationship, Harmony",
    "synonyms": ["Accord"],
    "antonyms": ["Hatred", "Enmity", "Animosity"],
    "shown": false
  },
  {
    "id": 841,
    "word": "rarefy",
    "meaning": "to make thin, less dense; to purify or refine",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 842,
    "word": "ratify",
    "meaning": "to approve and sanction formally",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 843,
    "word": "rave",
    "meaning": "act with excessive enthusiasm",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 844,
    "word": "reactionary",
    "meaning": "opposing progress",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 845,
    "word": "rebuff",
    "meaning": "snub",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 846,
    "word": "recast",
    "meaning": "cast or fashion anew",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 847,
    "word": "reciprocity",
    "meaning": "granting of privileges in return for similar",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 848,
    "word": "recitals",
    "meaning": "a number or performance of music",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 849,
    "word": "recluse",
    "meaning": "person who lives alone and avoids people",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 850,
    "word": "reconcile",
    "meaning": "settle a quarrel; restore peace",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 851,
    "word": "recourse",
    "meaning": "turning to someone or something for help",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 852,
    "word": "redeem",
    "meaning": "get back by payment; compensate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 853,
    "word": "refine",
    "meaning": "make or become pure, cultured",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 854,
    "word": "regale",
    "meaning": "to delight or entertain; to feast",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 855,
    "word": "rehabilitate",
    "meaning": "to put back to useful life",
    "synonyms": ["Restore", "Cure"],
    "antonyms": ["Ruin", "Destroy"],
    "shown": false
  },
  {
    "id": 856,
    "word": "rejoinder",
    "meaning": "An answer especially to a reply",
    "synonyms": ["Answer", "Retort", "Reply"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 857,
    "word": "rejuvenation",
    "meaning": "becoming young in nature or appearance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 858,
    "word": "relapse",
    "meaning": "fall back again",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 859,
    "word": "reluctant",
    "meaning": "unwilling, disinclined",
    "synonyms": ["Unenthusiastic", "Opposed"],
    "antonyms": ["Willing", "Eager", "Ready"],
    "shown": false
  },
  {
    "id": 860,
    "word": "render",
    "meaning": "deliver; provide; represent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 861,
    "word": "renovate",
    "meaning": "restore something to better condition",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 862,
    "word": "renowned",
    "meaning": "celebrated; famous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 863,
    "word": "repast",
    "meaning": "meal",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 864,
    "word": "repel",
    "meaning": "refuse to accept; cause dislike",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 865,
    "word": "reproach",
    "meaning": "scold; upbraid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 866,
    "word": "repulsive",
    "meaning": "causing a feeling of disgust",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 867,
    "word": "resigned",
    "meaning": "unresisting; submissive",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 868,
    "word": "resort",
    "meaning": "to frequently visit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 869,
    "word": "retard",
    "meaning": "check; hinder",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 870,
    "word": "revere",
    "meaning": "have deep respect for",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 871,
    "word": "reverent",
    "meaning": "feeling or showing deep respect",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 872,
    "word": "riddle",
    "meaning": "puzzling person or thing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 873,
    "word": "rift",
    "meaning": "split; crack; dissension",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 874,
    "word": "roll",
    "meaning": "call; calling of names",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 875,
    "word": "ruffian",
    "meaning": "violent, cruel man",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 876,
    "word": "sadism",
    "meaning": "Seeking pleasure from hurting others",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 877,
    "word": "salient",
    "meaning": "Conspicuous, Prominent",
    "synonyms": ["Outstanding"],
    "antonyms": ["Hidden"],
    "shown": false
  },
  {
    "id": 878,
    "word": "sallow",
    "meaning": "of a grayish greenish yellow color",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 879,
    "word": "salutary",
    "meaning": "remedial; causing improvement",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 880,
    "word": "sanction",
    "meaning": "approval (by authority); penalty",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 881,
    "word": "sanctuary",
    "meaning": "a holy place or a place of refuge or protection",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 882,
    "word": "sanity",
    "meaning": "health of mind; soundness of judgement",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 883,
    "word": "sardonic",
    "meaning": "disdainfully or skeptically humorous; sarcastic",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 884,
    "word": "sash",
    "meaning": "long strip worn round the waist",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 885,
    "word": "satiate",
    "meaning": "satisfy fully",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 886,
    "word": "saucy",
    "meaning": "rude, impudent",
    "synonyms": ["Insolent"],
    "antonyms": ["Modest", "Humble"],
    "shown": false
  },
  {
    "id": 887,
    "word": "savor",
    "meaning": "taste, flavor something",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 888,
    "word": "sawdust",
    "meaning": "tiny bits of wood",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 889,
    "word": "scent",
    "meaning": "smell (esp. pleasant)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 890,
    "word": "scorch",
    "meaning": "become discolored; dry up; go at high speed; to burn",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 891,
    "word": "scribble",
    "meaning": "write hastily",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 892,
    "word": "scurvy",
    "meaning": "disease due to deficiency of vitamin C",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 893,
    "word": "secede/secession",
    "meaning": "to withdraw from an organisation",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 894,
    "word": "secular",
    "meaning": "material (not spiritual); living outside monasteries; worldly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 895,
    "word": "sedate",
    "meaning": "sober, serious and unemotional; calm and composed",
    "synonyms": ["Serene"],
    "antonyms": ["Mercurial", "Frivolous"],
    "shown": false
  },
  {
    "id": 896,
    "word": "sedentary",
    "meaning": "marked by much sitting",
    "synonyms": [],
    "antonyms": ["Peripatetic"],
    "shown": false
  },
  {
    "id": 897,
    "word": "sediment",
    "meaning": "matter that settles to the bottom of liquid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 898,
    "word": "seduce",
    "meaning": "to tempt into wrong-doing",
    "synonyms": ["Allure", "Inveigle", "Entice"],
    "antonyms": ["Protect", "Guide", "Discourage"],
    "shown": false
  },
  {
    "id": 899,
    "word": "self-contained",
    "meaning": "complete within itself",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 900,
    "word": "semblance",
    "meaning": "outward appearance",
    "synonyms": ["Likeness", "Form"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 901,
    "word": "sequence",
    "meaning": "succession; connected line of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 902,
    "word": "sermon",
    "meaning": "reproving a person for his faults",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 903,
    "word": "serrated",
    "meaning": "having a toothed edge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 904,
    "word": "servile",
    "meaning": "like a slave; lacking independence",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 905,
    "word": "sever",
    "meaning": "break off",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 906,
    "word": "severance",
    "meaning": "severing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 907,
    "word": "shallow",
    "meaning": "little depth; not earnest",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 908,
    "word": "shambles",
    "meaning": "a scene of great destruction or disorder",
    "synonyms": ["Mess", "Muddle"],
    "antonyms": ["Order"],
    "shown": false
  },
  {
    "id": 909,
    "word": "sheath",
    "meaning": "cover for the blade of a weapon or a tool",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 910,
    "word": "shrewd",
    "meaning": "astute; showing sound judgement",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 911,
    "word": "shrill",
    "meaning": "sharp; piercing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 912,
    "word": "shun",
    "meaning": "keep away from; avoid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 913,
    "word": "shunt",
    "meaning": "send from one track to another; lay aside",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 914,
    "word": "sidestep",
    "meaning": "step to one side, dodge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 915,
    "word": "silt",
    "meaning": "a fine-grained sandy sediment carried or deposited by water",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 916,
    "word": "skeptic",
    "meaning": "one who habitually questions matters generally accepted",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 917,
    "word": "sketchy",
    "meaning": "Rough or rapid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 918,
    "word": "skit",
    "meaning": "short piece of humorous writing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 919,
    "word": "slack",
    "meaning": "sluggish; dull; not tight",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 920,
    "word": "slate",
    "meaning": "kind of blue-grey stone; propose; criticize",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 921,
    "word": "slither",
    "meaning": "to sleep, slide or glide along",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 922,
    "word": "sluggard",
    "meaning": "lazy, slow-moving person",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 923,
    "word": "slur",
    "meaning": "join sounds, words (indistinct)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 924,
    "word": "smirk",
    "meaning": "to smile in a conceited and complacent way",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 925,
    "word": "smoulder",
    "meaning": "burn slowly without flame",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 926,
    "word": "smug",
    "meaning": "annoyingly self-satisfied or complacent",
    "synonyms": ["Self-satisfied"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 927,
    "word": "snare",
    "meaning": "trap",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 928,
    "word": "snide",
    "meaning": "slyly malicious or derisive",
    "synonyms": ["Sneer", "Slyness"],
    "antonyms": ["Praising", "Eulogising"],
    "shown": false
  },
  {
    "id": 929,
    "word": "snub",
    "meaning": "treat with contempt",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 930,
    "word": "soar",
    "meaning": "rise; fly high",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 931,
    "word": "sober",
    "meaning": "self-controlled",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 932,
    "word": "sobriety",
    "meaning": "quality or condition of being sober",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 933,
    "word": "soggy",
    "meaning": "heavy with water",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 934,
    "word": "solitude",
    "meaning": "being solitary or alone, seclusion",
    "synonyms": ["Loneliness"],
    "antonyms": ["Society"],
    "shown": false
  },
  {
    "id": 935,
    "word": "solvent",
    "meaning": "of the power of forming a solution",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 936,
    "word": "somatic",
    "meaning": "of the body, physical",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 937,
    "word": "soot",
    "meaning": "black powder in smoke",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 938,
    "word": "sophisticated",
    "meaning": "complex; subtle; refined",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 939,
    "word": "spartan",
    "meaning": "handy, warlike, disciplined",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 940,
    "word": "spleen",
    "meaning": "feelings of anger or ill will; often suppressed",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 941,
    "word": "sponge",
    "meaning": "porous rubber for washing; live at other's expense",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 942,
    "word": "sporadic",
    "meaning": "happening or appearing in isolated instances",
    "synonyms": ["Infrequent"],
    "antonyms": ["Constant", "Prevalent", "Continue"],
    "shown": false
  },
  {
    "id": 943,
    "word": "spruce",
    "meaning": "neat and in a smart way",
    "synonyms": ["Neat"],
    "antonyms": ["Untidy", "Slovenly"],
    "shown": false
  },
  {
    "id": 944,
    "word": "spurious",
    "meaning": "counterfeit",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 945,
    "word": "spurn",
    "meaning": "have nothing to do; reject or refuse",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },

  {
    "id": 946,
    "word": "squabble",
    "meaning": "to quarrel noisily over a small matter",
    "synonyms": ["wrangle", "dispute", "quarrel"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 947,
    "word": "squander",
    "meaning": "spend wastefully",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 948,
    "word": "squat",
    "meaning": "crouch; settle without permission",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 949,
    "word": "staid",
    "meaning": "sober, sedate",
    "synonyms": ["serious"],
    "antonyms": ["excited"],
    "shown": false
  },
  {
    "id": 950,
    "word": "standing",
    "meaning": "status or reputation (figurative)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 951,
    "word": "stationary",
    "meaning": "still, motionless",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 952,
    "word": "stationery",
    "meaning": "writing material",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 953,
    "word": "steeply",
    "meaning": "rising or falling sharply",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 954,
    "word": "stigma",
    "meaning": "mark of shame or disgrace",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 955,
    "word": "stigmatise",
    "meaning": "describe somebody scornfully",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 956,
    "word": "stilted",
    "meaning": "artificially formal or dignified",
    "synonyms": ["stiff", "unnatural"],
    "antonyms": ["casual", "informal"],
    "shown": false
  },
  {
    "id": 957,
    "word": "sting",
    "meaning": "something sharp",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 958,
    "word": "stingy",
    "meaning": "spending, using unwillingly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 959,
    "word": "stint",
    "meaning": "to be thrifty; to set limits",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 960,
    "word": "stray",
    "meaning": "wander; lose one's way",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 961,
    "word": "streak",
    "meaning": "long; thin; move very fast",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 962,
    "word": "stride",
    "meaning": "walk with long steps",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 963,
    "word": "strut",
    "meaning": "a supporting bar; swagger",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 964,
    "word": "subdue",
    "meaning": "overcome; bring under control",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 965,
    "word": "subjugate",
    "meaning": "to conquer; to subdue",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 966,
    "word": "sublime",
    "meaning": "extreme; astounding",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 967,
    "word": "submerge",
    "meaning": "put under water, liquid; sink out of sight",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 968,
    "word": "suffice",
    "meaning": "be enough",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 969,
    "word": "suffocate",
    "meaning": "cause or have difficulty in breathing",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 970,
    "word": "suffrage",
    "meaning": "short prayer usually in a series; right of voting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 971,
    "word": "sullied",
    "meaning": "to be stained or discredited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 972,
    "word": "summarily",
    "meaning": "briefly; without delay",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 973,
    "word": "summary",
    "meaning": "done without delay or formality",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 974,
    "word": "sundry",
    "meaning": "various; miscellaneous; separate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 975,
    "word": "superannuate",
    "meaning": "to become retired; to become obsolete",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 976,
    "word": "supercilious",
    "meaning": "disdainful; characterised by haughty scorn",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 977,
    "word": "superfluous",
    "meaning": "more than is needed or wanted",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 978,
    "word": "superimpose",
    "meaning": "put something on the top",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 979,
    "word": "supersede",
    "meaning": "take the place of",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 980,
    "word": "suppress",
    "meaning": "prevent from being known; put an end to",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 981,
    "word": "surcharge",
    "meaning": "additional load; charge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 982,
    "word": "surveillance",
    "meaning": "watch kept over a person, especially a suspect",
    "synonyms": ["supervision", "invigilation"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 983,
    "word": "sustenance",
    "meaning": "nourishment, support",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 984,
    "word": "swagger",
    "meaning": "to walk with a bold, arrogant stride",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 985,
    "word": "swerve",
    "meaning": "change direction suddenly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 986,
    "word": "symbiosis",
    "meaning": "the living together of two kinds of organisms to their mutual advantage",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 987,
    "word": "syndrome",
    "meaning": "a set of symptoms characterising a disease or condition",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 988,
    "word": "synopsis",
    "meaning": "summary or outline",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 989,
    "word": "taboo",
    "meaning": "any social restriction",
    "synonyms": ["forbidden"],
    "antonyms": ["permit", "allow", "license"],
    "shown": false
  },
  {
    "id": 990,
    "word": "tacit",
    "meaning": "unspoken, silently understood",
    "synonyms": [],
    "antonyms": ["explicit", "verbal"],
    "shown": false
  },
  {
    "id": 991,
    "word": "tactile",
    "meaning": "perceptible by touch",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 992,
    "word": "tadpole",
    "meaning": "form of a frog when it leaves the egg",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 993,
    "word": "talisman",
    "meaning": "a ring, stone, etc. bearing engraved figures supposed to bring good luck, avert evil, etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 994,
    "word": "tamper",
    "meaning": "interfere with",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 995,
    "word": "tangential",
    "meaning": "suddenly changeable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 996,
    "word": "tantrum",
    "meaning": "a violent outburst of rage etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 997,
    "word": "tarnished",
    "meaning": "lost brightness",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 998,
    "word": "tassel",
    "meaning": "bunch of threads",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 999,
    "word": "taunt",
    "meaning": "contemptuous reproach; hurtful remark",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1000,
    "word": "taut",
    "meaning": "tightly stretched",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1001,
    "word": "tawdry",
    "meaning": "cheap; gaudy; showy; tacky",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1002,
    "word": "tawny",
    "meaning": "brownish-yellow, tan",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1003,
    "word": "tedious",
    "meaning": "long and dull",
    "synonyms": ["slow", "wearisome", "fatiguing"],
    "antonyms": ["light", "hearty", "cheerful"],
    "shown": false
  },
  {
    "id": 1004,
    "word": "teem",
    "meaning": "to be prolific, abound, swarm",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1005,
    "word": "teetotal",
    "meaning": "opposed to alcohol",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1006,
    "word": "temperate",
    "meaning": "showing self-control",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1007,
    "word": "tentative",
    "meaning": "done as a test, not final",
    "synonyms": [],
    "antonyms": ["established", "certain"],
    "shown": false
  },
  {
    "id": 1008,
    "word": "tepid",
    "meaning": "lukewarm",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1009,
    "word": "theatrical",
    "meaning": "designed for effect, show, unnatural",
    "synonyms": ["dramatic"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1010,
    "word": "therapeutic",
    "meaning": "serving to cure or heal or to preserve health",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1011,
    "word": "thesaurus",
    "meaning": "a book of synonyms and antonyms",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1012,
    "word": "thespian",
    "meaning": "(i) having to do with drama (ii) an actor",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1013,
    "word": "thickset",
    "meaning": "thick in body, stocky",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1014,
    "word": "threshold",
    "meaning": "the beginning point",
    "synonyms": ["beginning", "start"],
    "antonyms": ["end"],
    "shown": false
  },
  {
    "id": 1015,
    "word": "thrift",
    "meaning": "care; economy; thriving; prosperous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1016,
    "word": "thwart",
    "meaning": "obstruct; frustrate",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1017,
    "word": "timid",
    "meaning": "shy; easily frightened",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1018,
    "word": "titanic",
    "meaning": "of great size, strength or power",
    "synonyms": ["gigantic", "immense"],
    "antonyms": ["tiny", "small"],
    "shown": false
  },
  {
    "id": 1019,
    "word": "tonic",
    "meaning": "something giving strength or energy",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1020,
    "word": "topple",
    "meaning": "be unsteady and overturn",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1021,
    "word": "torment",
    "meaning": "severe pain or suffering",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1022,
    "word": "tortuous",
    "meaning": "devious; not straightforward",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1023,
    "word": "totalitarian",
    "meaning": "designating or of a government in which one political group maintains complete control, especially under a dictator",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1024,
    "word": "tout",
    "meaning": "person who worries others to buy something, to use his service",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1025,
    "word": "traumatic",
    "meaning": "an emotional shock having a lasting psychic effect",
    "synonyms": ["unpleasant", "agonising"],
    "antonyms": ["titillating"],
    "shown": false
  },
  {
    "id": 1026,
    "word": "tremor",
    "meaning": "trembling",
    "synonyms": ["shaking", "fearful"],
    "antonyms": ["brave"],
    "shown": false
  },
  {
    "id": 1027,
    "word": "trickle",
    "meaning": "flow in drops",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1028,
    "word": "trifling",
    "meaning": "unimportant",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1029,
    "word": "troupe",
    "meaning": "a group especially of actors, singers etc.",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1030,
    "word": "truant",
    "meaning": "one who shirks his duties",
    "synonyms": ["vagrant", "idler", "shirker"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1031,
    "word": "trustworthy",
    "meaning": "worthy of trust, reliable",
    "synonyms": ["dependable", "honest"],
    "antonyms": ["vacillating", "undependable"],
    "shown": false
  },
  {
    "id": 1032,
    "word": "turbulence",
    "meaning": "being uncontrolled; violent",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1033,
    "word": "turgid",
    "meaning": "excessively ornate; swollen or bloated",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1034,
    "word": "turmoil",
    "meaning": "state of extreme confusion, agitation or commotion",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1035,
    "word": "turmoil",
    "meaning": "trouble; disturbance",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1036,
    "word": "turquoise",
    "meaning": "greenish-blue precious stone",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1037,
    "word": "ulterior",
    "meaning": "situated beyond",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1038,
    "word": "ultimatum",
    "meaning": "a final offer or demand as in negotiations",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1039,
    "word": "uncanny",
    "meaning": "mysterious, astonishing, strange, bizarre",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1040,
    "word": "uncouth",
    "meaning": "rough; awkward",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1041,
    "word": "underbid",
    "meaning": "make a lower bid than somebody else",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1042,
    "word": "undermine",
    "meaning": "weaken gradually at the base",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1043,
    "word": "undertone",
    "meaning": "quiet voice, murmur, whisper",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1044,
    "word": "undo",
    "meaning": "loosen, open, unfasten",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1045,
    "word": "unearth",
    "meaning": "discover and bring to light",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1046,
    "word": "unexceptionable",
    "meaning": "not open to objection or criticism",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1047,
    "word": "unexceptional",
    "meaning": "dull, commonplace, typical, ordinary",
    "synonyms": [],
    "antonyms": ["exceptional"],
    "shown": false
  },
  {
    "id": 1048,
    "word": "unfeigned",
    "meaning": "not pretended; sincere",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1049,
    "word": "unilateral",
    "meaning": "of occurring on, or affecting one side only",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1050,
    "word": "unison",
    "meaning": "agreement, harmony",
    "synonyms": ["accord"],
    "antonyms": ["discord", "enmity"],
    "shown": false
  },
  {
    "id": 1051,
    "word": "unprecedented",
    "meaning": "never having happened, not known before",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1052,
    "word": "unrivalled",
    "meaning": "with no equal, unmatched",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1053,
    "word": "unruffled",
    "meaning": "calm, not anxious",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1054,
    "word": "unruly",
    "meaning": "wild, with no discipline, defiant, indomitable",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1055,
    "word": "unscathed",
    "meaning": "unharmed; unhurt",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1056,
    "word": "unseemly",
    "meaning": "inappropriate; indecorous",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1057,
    "word": "untoward",
    "meaning": "unfortunate; inconvenient",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1058,
    "word": "upheaval",
    "meaning": "a sudden, violent change",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1059,
    "word": "uphill",
    "meaning": "(i) up a slope (ii) laborious, tiring",
    "synonyms": ["arduous", "difficult"],
    "antonyms": ["easy"],
    "shown": false
  },
  {
    "id": 1060,
    "word": "uprising",
    "meaning": "a revolt against the rulers",
    "synonyms": ["insurrection"],
    "antonyms": ["submission"],
    "shown": false
  },
  {
    "id": 1061,
    "word": "uproar",
    "meaning": "violent",
    "synonyms": ["confusing", "chaos"],
    "antonyms": ["peace", "calm", "tranquility"],
    "shown": false
  },
  {
    "id": 1062,
    "word": "upsurge",
    "meaning": "an increase, rise",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1063,
    "word": "urbane",
    "meaning": "elegant; refined in manners",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1064,
    "word": "urchin",
    "meaning": "a mischievous child",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1065,
    "word": "usurp",
    "meaning": "to take possession by force",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1066,
    "word": "utopia",
    "meaning": "an imaginary ideal place",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1067,
    "word": "vacillation",
    "meaning": "being uncertain; hesitating",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1068,
    "word": "vain",
    "meaning": "without use, result; conceited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1069,
    "word": "valiant",
    "meaning": "brave",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1070,
    "word": "vamp",
    "meaning": "flirtatious woman, coquette, seductress, temptress",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1071,
    "word": "vandal",
    "meaning": "person who destroys property for the pleasure of destruction",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1072,
    "word": "vanity",
    "meaning": "pride, disdain, narcissism",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1073,
    "word": "varnish",
    "meaning": "adornment, decoration, polish, display",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1074,
    "word": "vat",
    "meaning": "a large vessel",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1075,
    "word": "veer",
    "meaning": "change direction",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1076,
    "word": "vendetta",
    "meaning": "private quarrel between families",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1077,
    "word": "venom",
    "meaning": "poison, toxin, bane, acrimony, ill will, malice",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1078,
    "word": "veracity",
    "meaning": "truth",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1079,
    "word": "verdant",
    "meaning": "fresh and green",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1080,
    "word": "verdict",
    "meaning": "judgement, decision, ruling",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1081,
    "word": "verve",
    "meaning": "spirit; vigor; enthusiasm",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1082,
    "word": "vestige",
    "meaning": "trace or sign",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1083,
    "word": "veterinary",
    "meaning": "referring to treatment of sick animals",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1084,
    "word": "vex",
    "meaning": "annoy; distress; trouble",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1085,
    "word": "vice",
    "meaning": "evil, iniquity, sin, wickedness, depravity",
    "synonyms": ["foible", "dishonesty"],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1086,
    "word": "vicious",
    "meaning": "evil, wild, violent, fierce",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1087,
    "word": "vigilance",
    "meaning": "watchfulness; self-appointed group that maintains order",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1088,
    "word": "vigilant",
    "meaning": "member of a vigilance committee, alert, watchful",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1089,
    "word": "vigorous",
    "meaning": "strong; energetic",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1090,
    "word": "vile",
    "meaning": "extremely unpleasant, wicked, wretched",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1091,
    "word": "vilify",
    "meaning": "slander; say evil things",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1092,
    "word": "vindicate",
    "meaning": "to free from allegation or blame; to justify",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1093,
    "word": "vindictive",
    "meaning": "having a desire to revenge",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1094,
    "word": "vintage",
    "meaning": "old, ancient, antique, collecting of grapes to make wine",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1095,
    "word": "virile",
    "meaning": "manly, masculine, stalwart",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1096,
    "word": "visceral",
    "meaning": "of the internal organs of the body",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1097,
    "word": "viscous",
    "meaning": "sticky; semi-fluid",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1098,
    "word": "vitiate",
    "meaning": "lower the quality; weaken the strength",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1099,
    "word": "vivacious",
    "meaning": "lively; high-spirited",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1100,
    "word": "volatile",
    "meaning": "changeable; inconstant",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1101,
    "word": "volition",
    "meaning": "power of choosing or determining",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1102,
    "word": "voluptuous",
    "meaning": "full of pleasure to the senses",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1103,
    "word": "wag",
    "meaning": "merry person",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1104,
    "word": "warmonger",
    "meaning": "person who stirs up war",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1105,
    "word": "warrant",
    "meaning": "authority; written order; guarantee",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1106,
    "word": "wean",
    "meaning": "to turn away (from a habit)",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1107,
    "word": "whimsical",
    "meaning": "full of odd and fanciful ideas",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1108,
    "word": "wince",
    "meaning": "show bodily or mental pain",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1109,
    "word": "woo",
    "meaning": "try to win",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1110,
    "word": "wrangle",
    "meaning": "to dispute angrily or peevishly",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1111,
    "word": "writ",
    "meaning": "written order",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1112,
    "word": "yarn",
    "meaning": "tale, story, fibers for knitting",
    "synonyms": [],
    "antonyms": [],
    "shown": false
  },
  {
    "id": 1113,
    "word": "zeal",
    "meaning": "intense enthusiasm, ardour, fervour",
    "synonyms": ["easements"],
    "antonyms": ["apathy", "indifference"],
    "shown": false
  },
  {
    "id": 1114,
    "word": "zenith",
    "meaning": "the highest point",
    "synonyms": ["pinnacle", "summit"],
    "antonyms": ["base", "nadir"],
    "shown": false
  },
  {
    "id": 1115,
    "word": "zest",
    "meaning": "(i) keen enjoyment (ii) stimulating quality",
    "synonyms": ["gusto"],
    "antonyms": ["depression", "despondency"],
    "shown": false
  }

];

// ==================================================================
// MAIN APP CODE (SAFE VERSION)
// ==================================================================
const TOTAL_WORDS = wordData.length;
const WORDS_PER_DAY = 20;
const TOTAL_DAYS = Math.ceil(TOTAL_WORDS / WORDS_PER_DAY);

export default function App() {
  const [todayWords, setTodayWords] = useState([]);
  const [usedIds, setUsedIds] = useState([]);
  const [dayCount, setDayCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Load initial data
  useEffect(() => {
    loadNewWords();
  }, []);

  const loadNewWords = () => {
    setIsLoading(true);
    
    try {
      // Filter unused words
      const availableWords = wordData.filter(
        word => !usedIds.includes(word.id) && !word.shown
      );
      
      // Calculate words to show
      const wordCount = Math.min(WORDS_PER_DAY, availableWords.length);
      
      // Shuffle and select
      const shuffled = [...availableWords].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, wordCount);
      
      // Update state
      const newIds = selected.map(word => word.id);
      setUsedIds([...usedIds, ...newIds]);
      setTodayWords(selected);
      
      // Update progress
      const learnedCount = usedIds.length + wordCount;
      setProgress(Math.round((learnedCount / TOTAL_WORDS) * 100));
      
      // Move to next day
      setDayCount(dayCount + 1);
    } catch (error) {
      console.error("Error loading words:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate stats
  const learnedCount = usedIds.length;
  const remainingWords = TOTAL_WORDS - learnedCount;
  const remainingDays = TOTAL_DAYS - dayCount + 1;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>CAT High Frequency Words</Text>
        <Text style={styles.subtitle}>{TOTAL_WORDS} Words Mastery Plan</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Day {Math.min(dayCount, TOTAL_DAYS)} of {TOTAL_DAYS} • 
          Learned: {learnedCount} • Remaining: {remainingWords}
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      {/* Words Display */}
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.loadingText}>Loading today's words...</Text>
        </View>
      ) : (
        <FlatList
          data={todayWords}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.wordCard}>
              <Text style={styles.word}>{item.word}</Text>
              <Text style={styles.meaning}>{item.meaning}</Text>
              <View style={styles.row}>
                <Text style={styles.synonym}>S: {item.synonyms.join(', ')}</Text>
                <Text style={styles.antonym}>A: {item.antonyms.join(', ')}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}

      {/* Controls */}
      <View style={styles.controls}>
        <Button
          title={dayCount > TOTAL_DAYS ? "Completed! 🎓" : `Day ${dayCount} →`}
          onPress={loadNewWords}
          disabled={dayCount > TOTAL_DAYS || isLoading}
          color="#2ecc71"
        />
      </View>

      {/* Completion Message */}
      {dayCount > TOTAL_DAYS && (
        <View style={styles.completedContainer}>
          <Text style={styles.completedTitle}>Congratulations! 🎉</Text>
          <Text style={styles.completedText}>
            You've mastered all {TOTAL_WORDS} high-frequency words in {TOTAL_DAYS} days!
          </Text>
        </View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15
  },
  header: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginTop: 5
  },
  progressContainer: {
    marginBottom: 20
  },
  progressText: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 8,
    textAlign: 'center'
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3498db'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 15,
    color: '#7f8c8d'
  },
  listContent: {
    paddingBottom: 20
  },
  wordCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#9b59b6'
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5
  },
  meaning: {
    fontSize: 15,
    color: '#34495e',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  synonym: {
    color: '#27ae60',
    fontWeight: '500'
  },
  antonym: {
    color: '#e74c3c',
    fontWeight: '500'
  },
  controls: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0'
  },
  completedContainer: {
    backgroundColor: '#d5f5e3',
    padding: 20,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center'
  },
  completedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 10
  },
  completedText: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center'
  }
});
