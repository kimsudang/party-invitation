import { Train, Bus } from "lucide-react";

const SubwayBadge = ({ line, color }: { line: string; color: string }) => (
    <span
        className="inline-flex items-center justify-center rounded px-2 py-0.5 text-xs font-bold text-white shrink-0"
        style={{ backgroundColor: color }}
    >
        {line}
    </span>
);

const TransportSection = () => {
    return (
        <section className="px-6 pb-10">
            <h3 className="pb-6 text-center text-2xl font-semibold text-invitation-title">대중교통</h3>

            {/* 지하철 */}
            <div className="mb-6">
                <div className="mb-3 flex items-center justify-start gap-2 text-muted-fg">
                    <Train className="h-5 w-5" />
                    <span className="text-base font-semibold">지하철</span>
                </div>
                <div className="space-y-2 text-base text-invitation-text">
                    <div className="flex items-start gap-2">
                        <SubwayBadge line="2호선" color="hsl(145, 60%, 38%)" />
                        <span>건대입구역 5번 출구</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <SubwayBadge line="7호선" color="hsl(75, 45%, 40%)" />
                        <span>건대입구역 4번 출구 (롯데백화점 연결통로 이용)</span>
                    </div>
                </div>
            </div>

            {/* 버스 */}
            <div>
                <div className="mb-3 flex items-center justify-start gap-2 text-muted-fg">
                    <Bus className="h-5 w-5" />
                    <span className="text-base font-semibold">버스</span>
                </div>
                <div className="space-y-1.5 text-base text-invitation-text">
                    <div className="flex gap-4">
                        <span className="w-20 shrink-0 font-semibold text-muted-fg">간선버스</span>
                        <span>102, 240, 721</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="w-20 shrink-0 font-semibold text-muted-fg">지선버스</span>
                        <span>2222, 2224, 2016, 3217, 3220, 4212, 2412, 2014</span>
                    </div>
                    <div className="flex gap-4">
                        <span className="w-20 shrink-0 font-semibold text-muted-fg">마을버스</span>
                        <span>광진 05</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransportSection;
