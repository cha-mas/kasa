import { Banner } from "../components/shared/Banner";
import BGImage from "../assets/img/banners/1.jpg";

export function Home() {
    return (
        <>
            <Banner image={BGImage}>Chez vous, partout et ailleurs</Banner>
        </>
    )
}