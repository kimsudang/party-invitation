import locationImg from "../assets/location.png";

const MapSection = () => {
    return (
        <section className="px-6 py-10">
            <h2 className="pb-6 text-center text-2xl font-semibold text-invitation-title">오시는 길</h2>

            {/* 위치 안내 이미지 */}
            <img
                src={locationImg}
                alt="위치 안내 지도"
                className="pb-4 w-full rounded border border-invitation-border"
            />

            {/* 지도 API 영역 */}
            <div
                id="map"
                className="pb-4 h-55 w-full overflow-hidden rounded border border-invitation-border bg-secondary-bg flex items-center justify-center text-sm text-muted-fg"
            >
                지도
            </div>

            {/* 주소 */}
            <div className="text-center space-y-1">
                <p className="text-sm text-invitation-text">서울특별시 광진구 능동로 90 더 클래식 500</p>
                <p className="text-sm text-muted-fg">02-2218-5000</p>
            </div>
        </section>
    );
};

export default MapSection;
