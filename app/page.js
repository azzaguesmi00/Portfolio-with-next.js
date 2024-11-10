import Image from 'next/image';
export default function HomePage() {
    return (
      <section className="home">
        <Image src="/image.jpg" alt="Profile Picture" width={150} height={150} />
        <h1>Hello, I'm Azza</h1>
        <p>Welcome to my portfolio website. I am a Web Devoloper with expertise in C , python , javascript.</p>
      </section>
    );
  }