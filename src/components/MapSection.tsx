import locationImg from "../assets/location.png";

const MapSection = () => {
    return (
        <section className="px-6 py-10 flex flex-col gap-4">
            <h2 className="text-center text-2xl font-bold text-invitation-title">오시는 길</h2>

            {/* 위치 안내 이미지 */}
            <img
                src={locationImg}
                alt="위치 안내 지도"
                className="w-full rounded border border-invitation-border"
            />

            {/* 지도 API 영역 */}
            <div
                id="map"
                className="h-55 w-full overflow-hidden rounded border border-invitation-border bg-secondary-bg flex items-center justify-center text-sm text-muted-fg"
            >
                지도
            </div>

            {/* 주소 */}
            <div className="text-center space-y-1">
                <p className="text-lg font-medium text-invitation-text">서울특별시 광진구 능동로 90 더 클래식 500</p>
                <p className="text-lg text-muted-fg">02-2218-5000</p>
            </div>
        </section>
    );
};

export default MapSection;
