interface Props {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    variant?: 'matrix' | 'cyberpunk' | 'neon' | 'hologram';
    animated?: boolean;
    liquidEffect?: boolean;
    class?: string;
}
declare const PortfolioCard: import("svelte").Component<Props, {}, "">;
type PortfolioCard = ReturnType<typeof PortfolioCard>;
export default PortfolioCard;
