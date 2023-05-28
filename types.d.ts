type Image = {
    src: string;
    alt: string;
};

type GroupMember = {
    name: string;
    github: string;
    portfolio: string;
};

type Technology = {
    name: string;
    icon: string;
}

type ProjectDetails = {
    subtitle: string;
    description: string;
    technology: Technology[];
    images: Image[];
}

type Project = {
    id: int
    title: string;
    type: string;
    description_short: string;
    headerImg: Image;
    date: string;
    group: GroupMember[];
    details: ProjectDetails[];
};
