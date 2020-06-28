export interface Tutor {
    id: string;
    name: string;
    subjects: Subject[]
}

interface Subject {
    id: string;
    name: string;
}