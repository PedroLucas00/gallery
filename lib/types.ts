export interface Project {
    id: string;
    name: string;
    type: string;
    image: string;
    categories: Category[];
    students: Student[];
    createdAt: Date;
    updatedAt: Date;
    informations?: string | null;
    objective?: string | null;
}

export interface Category {
    id: string;
    name: string;
    projects: Project[];
}

export interface Student {
    id: string;
    name: string;
    projects: Project[];
}