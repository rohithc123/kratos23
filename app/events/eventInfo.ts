export interface EventInfo {
    name: string;
    category: 'techincal' | 'nontechnical';
    type: 'team' | 'solo';
    online: boolean;
    fee: string;
    description: string;
    rules: string[];
    prizes: string[];
    organizers: string[],
    teamSize: number;
    maxTeams: number | 'unlimited';
    time?: string;
    venue?: string;
}

const eventsLiteral: { [key: string]: EventInfo } = {
    'futsal': {
        name: 'Futsal',
        category: 'nontechnical',
        type: 'team',
        online: false,
        fee: '250',
        description: 'Put your skills to the test! you can always blame the weather, the sun or the ground but are you worthy of the prize?',
        rules: [
            'Length of Game: 4 minutes halves',
            'Teams can call a 1-minute halftime',
            '9 minutes per match; Extended up to 10 minutes if required.',
            'Teams comprise of 4 main players (1 goalkeeper) and 1 substitute.',
            'Conduct of Knockout or League tournament depends on the number of teams.',
            'No offensive language or violent conduct.',
            'Players receiving Yellow card are obliged to a 1-minute ban.',
            'Players receiving Red card should leave the match.',
            'Play for referee whistle',
            'One-step penalty'
        ],
        prizes: [
            'Some random thing',
            'Some other thing',
            'Some other other thing'
        ],
        teamSize: 4,
        maxTeams: 8,
        organizers: [
            'Thohith Hewin - 9591234159'
        ]

    }
}

export const events: Map<string, EventInfo> = new Map(Object.entries(eventsLiteral));


