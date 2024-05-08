import data from '../../data.json';
import Card from '../utils/Card';
import { useMediaQuery } from 'react-responsive';

export default function Testimonials() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section id="testimonials">
      <div className="flex flex-col justify-center items-start py-12 bg-[#FFFCF7] px-4">
        <div className="flex flex-wrap items-center gap-2">
          {data['section-testimonials'].clients
            ?.slice(0, isMobile ? 2 : undefined)
            .map((client, index) => (
              <Card
                key={client.id + index}
                paragraph={client.paragraph}
                url={client.image}
                alt={client.alt}
                role={client.role}
                name={client.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
