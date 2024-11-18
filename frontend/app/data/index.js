const provinces = [
    { label: 'Panay', value: 1 },
    { label: 'Negros', value: 2 },
    { label: 'Cebu', value: 3 },
    { label: 'Leyte', value: 4 },
    { label: 'Samar', value: 5 },
    { label: 'Bohol', value: 6 },
    { label: 'Mactan', value: 7 },
    { label: 'Guimaras', value: 8 },
    { label: 'Biliran', value: 9 },
    { label: 'Bantayan', value: 10 },
    { label: 'Siquijor', value: 11 },
    { label: 'Panglao', value: 12 },
    { label: 'Panaon', value: 13 },
    { label: 'Pacijan', value: 14 },
    { label: 'Daram', value: 15 },
    { label: 'Poro', value: 16 },
    { label: 'Boracay', value: 17 },
    { label: 'Ponson', value: 18 },
    { label: 'Maripipi', value: 19 },
    { label: 'Limasawa', value: 20 },
    { label: 'Homonhon', value: 21 },
    { label: 'Parasan', value: 22 },
    { label: 'Batbatan', value: 23 },
    { label: 'Mararison', value: 24 },
    { label: 'Maniguin', value: 25 },
];

const municipalities = [
    {
        label: 'Panay',
        value: 1,
        cities: [
            { label: 'Iloilo City', value: 'iloilo-city' },
            { label: 'Roxas City', value: 'roxas-city' },
            { label: 'Kalibo', value: 'kalibo' },
        ],
    },
    {
        label: 'Negros',
        value: 2,
        cities: [
            { label: 'Bacolod City', value: 'bacolod-city' },
            { label: 'Talisay City', value: 'talisay-city' },
            { label: 'Silay City', value: 'silay-city' },
        ],
    },
    {
        label: 'Cebu',
        value: 3,
        cities: [
            { label: 'Cebu City', value: 'cebu-city' },
            { label: 'Mandaue City', value: 'mandaue-city' },
            { label: 'Lapu-Lapu City', value: 'lapu-lapu-city' },
        ],
    },
    {
        label: 'Leyte',
        value: 4,
        cities: [
            { label: 'Tacloban City', value: 'tacloban-city' },
            { label: 'Ormoc City', value: 'ormoc-city' },
        ],
    },
    {
        label: 'Samar',
        value: 5,
        cities: [
            { label: 'Catbalogan City', value: 'catbalogan-city' },
            { label: 'Calbayog City', value: 'calbayog-city' },
        ],
    },
    {
        label: 'Bohol',
        value: 6,
        cities: [
            { label: 'Tagbilaran City', value: 'tagbilaran-city' },
            { label: 'Panglao', value: 'panglao' },
        ],
    },
    {
        label: 'Mactan',
        value: 7,
        cities: [
            { label: 'Lapu-Lapu City', value: 'lapu-lapu-city' },
        ],
    },
    {
        label: 'Guimaras',
        value: 8,
        cities: [
            { label: 'Jordan', value: 'jordan' },
            { label: 'Buenavista', value: 'buenavista' },
        ],
    },
    {
        label: 'Biliran',
        value: 9,
        cities: [
            { label: 'Naval', value: 'naval' },
        ],
    },
    {
        label: 'Bantayan',
        value: 10,
        cities: [
            { label: 'Santa Fe', value: 'santa-fe' },
            { label: 'Bantayan', value: 'bantayan' },
        ],
    },
    {
        label: 'Siquijor',
        value: 11,
        cities: [
            { label: 'Siquijor', value: 'siquijor' },
            { label: 'Larena', value: 'larena' },
        ],
    },
    {
        label: 'Panglao',
        value: 12,
        cities: [
            { label: 'Panglao', value: 'panglao' },
        ],
    },
    {
        label: 'Panaon',
        value: 13,
        cities: [
            { label: 'San Ricardo', value: 'san-ricardo' },
            { label: 'Liloan', value: 'liloan' },
        ],
    },
    {
        label: 'Pacijan',
        value: 14,
        cities: [
            { label: 'San Francisco', value: 'san-francisco' },
        ],
    },
    {
        label: 'Daram',
        value: 15,
        cities: [
            { label: 'Daram', value: 'daram' },
        ],
    },
    {
        label: 'Poro',
        value: 16,
        cities: [
            { label: 'Poro', value: 'poro' },
        ],
    },
    {
        label: 'Boracay',
        value: 17,
        cities: [
            { label: 'Malay', value: 'malay' },
        ],
    },
    {
        label: 'Ponson',
        value: 18,
        cities: [
            { label: 'Ponson', value: 'ponson' },
        ],
    },
    {
        label: 'Maripipi',
        value: 19,
        cities: [
            { label: 'Maripipi', value: 'maripipi' },
        ],
    },
    {
        label: 'Limasawa',
        value: 20,
        cities: [
            { label: 'Limasawa', value: 'limasawa' },
        ],
    },
    {
        label: 'Homonhon',
        value: 21,
        cities: [
            { label: 'Homonhon', value: 'homonhon' },
        ],
    },
    {
        label: 'Parasan',
        value: 22,
        cities: [
            { label: 'Parasan', value: 'parasan' },
        ],
    },
    {
        label: 'Batbatan',
        value: 23,
        cities: [
            { label: 'Batbatan', value: 'batbatan' },
        ],
    },
    {
        label: 'Mararison',
        value: 24,
        cities: [
            { label: 'Mararison', value: 'mararison' },
        ],
    },
    {
        label: 'Maniguin',
        value: 25,
        cities: [
            { label: 'Maniguin', value: 'maniguin' },
        ],
    },
];
