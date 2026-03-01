const InvitationCard = () => {
    return (
        <div className="relative px-4 pt-8 pb-2">
            <div className="relative bg-transparent px-8 py-32">
                {/* 손그림 스타일 SVG 테두리 */}
                <svg
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 400 560"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M30,25 C32,22 50,18 80,20 C120,15 160,22 200,19 C240,16 280,23 320,20 C350,18 370,22 375,25
                           C378,28 380,60 378,100 C382,160 377,220 380,280 C383,340 378,400 380,450 C382,490 378,525 376,540
                           C374,544 370,548 372,550 C369,552 350,553 320,550 C280,554 240,548 200,551 C160,554 120,548 80,551
                           C50,553 32,550 28,547 C25,544 22,510 24,475 C20,415 25,355 22,295 C19,235 24,175 22,115
                           C20,60 24,40 27,28 Z"
                        stroke="hsl(30, 15%, 45%)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        opacity="0.7"
                    />
                    <path
                        d="M36,31 C38,28 54,24 84,26 C122,21 160,27 200,24 C240,21 278,28 316,25 C346,23 364,27 369,30
                           C372,33 373,63 372,103 C375,163 371,223 374,283 C376,343 372,393 374,443 C375,483 372,518 370,532
                           C368,536 366,540 368,542 C366,544 348,545 318,542 C278,546 240,541 200,544 C160,547 122,542 84,545
                           C54,547 38,544 35,541 C32,538 30,504 32,469 C28,409 32,349 30,289 C27,229 31,169 29,109
                           C27,63 31,44 34,34 Z"
                        stroke="hsl(30, 15%, 45%)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        opacity="0.4"
                    />
                </svg>

                {/* 본문 */}
                <div className="relative z-10 py-3 flex flex-col gap-3 items-center text-center">
                    <p className="mb-3 text-sm tracking-widest text-muted-fg italic font-light">Happy birthday</p>

                    <h1 className="mb-10 text-4xl font-semibold tracking-wide text-invitation-title">초대합니다</h1>

                    <div className="mb-10 space-y-1 text-invitation-text">
                        <p className="text-base">곽영애 여사님의</p>
                        <p className="text-base">산수연에 여러분을 모십니다.</p>
                    </div>

                    <div className="space-y-1 text-invitation-text">
                        <p className="text-lg font-medium">2026.03.21 (토) 오후 5시</p>
                        <p className="text-sm text-muted-fg">더 클래식 500 라운지</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationCard;
