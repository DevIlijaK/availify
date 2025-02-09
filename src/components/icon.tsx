"use client";

import {
  Archive,
  ArrowLeftFromLine,
  ArrowUp,
  AudioWaveform,
  Bold,
  Brain,
  Calendar,
  CheckCircle2,
  CheckIcon,
  ChevronRight,
  ChevronsUpDown,
  Circle,
  ClipboardCheck,
  Clock9,
  Code,
  Copy,
  Cog,
  Eye,
  EyeOff,
  Folder,
  FolderPlus,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heart,
  History,
  Home,
  Hourglass,
  ImagePlus,
  Inbox,
  Italic,
  List,
  Loader,
  Lock,
  LogOut,
  Mail,
  Menu,
  MessageSquareMore,
  Minimize2,
  Minus,
  MoreVertical,
  NotebookPen,
  Pencil,
  Phone,
  Plus,
  Pyramid,
  Quote,
  RefreshCw,
  Send,
  Settings,
  Share,
  Shell,
  StickyNote,
  Strikethrough,
  Table,
  Trash,
  Type,
  User,
  User2Icon,
  Users,
  WrapText,
  X,
  GripVertical,
  Zap,
  FileText,
  Presentation,
  Download,
  Coffee,
  File,
  Beef,
  Wine,
  Beer,
  CookingPot,
  ChevronLeft,
  LogIn,
  Croissant,
  Utensils,
  Loader2,
  Cake,
  Smartphone,
  BarChart,
  Clock,
  ArrowRight,
  ExternalLink,
  Palette,
  LayoutGrid,
  PenTool,
  Image,
  ListOrdered,
} from "lucide-react";

const icons = {
  AudioWaveform,
  CookingPot,
  Loader2,
  Clock,
  BarChart,
  Cake,
  Smartphone,
  PenTool,
  Utensils,
  Croissant,
  LogIn,
  Presentation,
  Beef,
  Wine,
  Beer,
  Eye,
  EyeOff,
  Loader,
  Send,
  Mail,
  ArrowUp,
  ArrowLeftFromLine,
  Shell,
  Image,
  ImagePlus,
  Inbox,
  Brain,
  Home,
  User2Icon,
  Lock,
  Pyramid,
  RefreshCw,
  Heart,
  History,
  Plus,
  CheckIcon,
  Users,
  Settings,
  Table,
  Folder,
  FolderPlus,
  ChevronRight,
  ChevronsUpDown,
  User,
  Trash,
  Pencil,
  X,
  ClipboardCheck,
  Share,
  MoreVertical,
  CheckCircle: CheckCircle2,
  Circle,
  Clock9,
  Bold,
  Italic,
  Strikethrough,
  Code,
  Copy,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  Quote,
  Paragraph: Type,
  Minus,
  Minimize2,
  WrapText,
  LogOut,
  Hourglass,
  MessageSquareMore,
  NotebookPen,
  Cog,
  Phone,
  Archive,
  Zap,
  Calendar,
  StickyNote,
  LucideHourglass: Hourglass,
  GripVertical,
  Coffee,
  Menu,
  FileText,
  ChevronLeft,
  Download,
  File,
  ArrowRight,
  ExternalLink,
  Palette,
  LayoutGrid,
};

export type IconName = keyof typeof icons;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  isFilled?: boolean;
};

export type Props = {
  className?: string;
  name: IconName;
} & IconProps;

export const Icon: React.FC<Props> = ({ className, name, ...rest }) => {
  const Icon = icons[name];
  return <Icon {...rest} className={className} />;
};

const iconNames = Object.keys(icons) as IconName[];

export const AllIconsShowchase: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap content-start gap-4 p-10 pb-40">
        {iconNames.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-xl border p-2"
          >
            <Icon
              name={name}
              width={30}
              height={30}
              className="h-[30px] w-[30px] flex-shrink-0"
            />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
