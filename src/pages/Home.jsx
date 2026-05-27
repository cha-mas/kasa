import { Banner } from "../components/shared/Banner";
import BGImage from "../assets/img/banners/1.jpg";
import { useProperties } from '../hooks/properties'
import { PropertyCard } from '../components/home/PropertyCard'

export function Home() {

    const { data } = useProperties()

    return (
        <>
            <Banner image={BGImage}>Chez vous, partout et ailleurs</Banner>
            <section className="properties-grid">
                {data.map(property => (
                    <PropertyCard data={property} />
                ))}
            </section>
        </>
    )
}