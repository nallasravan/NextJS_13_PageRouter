
import styles from '@/styles/About.module.css';



export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">About Us</h1>
      <p className="text-lg text-gray-300 leading-relaxed">
        This app uses <strong className="text-cyan-400">pages/ folder</strong> +{' '}
        <strong className="text-red-400">Page Router</strong> +{' '}
        <strong className="text-yellow-300">Tailwind CSS only</strong>.
      </p>

      <hr></hr>
    <p class="uppercase">The quick brown fox ... here using tailwind class name uppercase using  </p>

   <p className={styles.withoutuppcase}>
      This is uppercase (scoped only to this component)
    </p>
    
    </div>
  );
}