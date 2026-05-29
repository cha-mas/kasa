import { Banner } from "../../../../components/shared/banner";
import BGImage from "../../../../assets/img/banners/1.jpg";
import { useProperties } from '../../../properties'
import { PropertyCard } from '../../../../components/home/PropertyCard'

export function Home() {

    const { data } = useProperties()

    return (
        <>
            <Banner image={BGImage}>Chez vous, partout et ailleurs</Banner>
            <section className="properties-grid">
                {data.map(property => (
                    <PropertyCard key={property.id} data={property} />
                ))}
            </section>
        </>
    )
}