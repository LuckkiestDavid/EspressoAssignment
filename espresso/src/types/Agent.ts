export interface Agent {
    id :       string;
    name :     string;
    email:     string;
    status :  'Activity' | 'Inactive';
    lastSeen : string;
}