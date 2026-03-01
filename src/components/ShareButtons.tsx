import { Link, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

const ShareButton = ({
    icon: Icon,
    label,
    onClick,
}: {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className="flex w-full items-center justify-center gap-2 rounded-full border border-invitation-border bg-transparent px-6 py-4 text-base font-medium text-invitation-text transition-colors hover:bg-secondary-bg active:bg-secondary-bg"
    >
        <Icon className="h-5 w-5" />
        {label}
    </button>
);

const ShareButtons = () => {
    const handleCopyLink = () => {
        navigator.clipboard.writeText("https://party-invitation-ochre.vercel.app/");
        toast.success("링크가 복사되었습니다");
    };

    const handleKakao = () => {
        toast.info("카카오톡 공유 기능은 준비 중입니다");
    };

    const handleMap = () => {
        window.open("https://www.pentaz.co.kr/about/location.do", "_blank");
    };

    return (
        <section className="pb-6">
            <div className="flex flex-col gap-2">
                <ShareButton icon={Link} label="링크 공유하기" onClick={handleCopyLink} />
                <ShareButton icon={MessageCircle} label="카카오톡 공유하기" onClick={handleKakao} />
                <ShareButton icon={MapPin} label="더 클래식 500 라운지" onClick={handleMap} />
            </div>
        </section>
    );
};

export default ShareButtons;
