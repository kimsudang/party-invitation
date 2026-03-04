// import { useEffect } from "react";
import locationImg from "../assets/location.png";

// const VENUE_LAT = 37.5513;
// const VENUE_LNG = 127.0794;

const MapSection = () => {
    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO}&autoload=false`;
    //     script.async = true;
    //
    //     script.onload = () => {
    //         window.kakao.maps.load(() => {
    //             const container = document.getElementById("map");
    //             if (!container) return;
    //
    //             const map = new window.kakao.maps.Map(container, {
    //                 center: new window.kakao.maps.LatLng(VENUE_LAT, VENUE_LNG),
    //                 level: 3,
    //             });
    //
    //             const marker = new window.kakao.maps.Marker({
    //                 position: new window.kakao.maps.LatLng(VENUE_LAT, VENUE_LNG),
    //             });
    //             marker.setMap(map);
    //         });
    //     };
    //
    //     document.head.appendChild(script);
    //
    //     return () => {
    //         if (document.head.contains(script)) {
    //             document.head.removeChild(script);
    //         }
    //     };
    // }, []);

    return (
        <section className="px-6 py-10 flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold text-invitation-title">오시는 길</h2>

            {/* 위치 안내 이미지 */}
            <img
                src={locationImg}
                alt="위치 안내 지도"
                className="w-full rounded border border-invitation-border"
            />

            {/* 지도 API 영역 - 추후 업데이트 */}
            {/* <div
                id="map"
                className="w-full rounded border border-invitation-border"
                style={{ height: "220px" }}
            /> */}

            {/* 주소 */}
            <div className="text-center space-y-1">
                <p className="text-lg font-medium text-invitation-text">서울특별시 광진구 능동로 90 더 클래식 500</p>
                <p className="text-lg text-muted-fg">02-2218-5000</p>
            </div>
        </section>
    );
};

export default MapSection;
