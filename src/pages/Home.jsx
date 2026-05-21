import { Banner } from "../components/shared/Banner";
import BGImage from "../assets/img/banners/1.jpg";
import { useProperties } from '../hooks/useProperties'

export function Home() {

    const { data, error } = useProperties()

    return (
        <>
            <Banner image={BGImage}>Chez vous, partout et ailleurs</Banner>

        </>
    )
}