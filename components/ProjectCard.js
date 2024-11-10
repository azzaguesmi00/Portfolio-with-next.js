import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div>
      <Image src={image} alt={title} width={400} height={300} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={link}>View Project</Link>
    </div>
  );
}
