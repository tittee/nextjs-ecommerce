import { BannerProps } from 'interfaces/components';
import LinkCommon from '@common/Link';
import ImageCommon from '@common/Image';
import { clsx } from 'clsx';
import style from '@styles/Home.module.css';

interface BannerWithContentProps extends BannerProps {
  children: React.ReactNode;
}

const BannerWithContent = ({
  position,
  title = 'Banner Ads',
  href,
  isExternal,
  image,
  style,
  background,
  children,
}: BannerWithContentProps) => {
  const bannerPosition = position === 'image-left' ? 'order-2 md:order-1' : 'order-2';
  const contentPosition = position === 'image-left' ? 'order-1 md:order-2' : 'order-1';

  let bgColor;
  switch (background) {
    case 'blue-gradient':
      bgColor = 'bg-gradient-to-r from-[#005DF1] to-[#27B1FF] ';
      break;
    case 'white':
      bgColor = 'bg-white shadow';
      break;
    default:
      bgColor = 'bg-blue-800 bg-opacity-75';
  }

  const BannerDisplay = ({ href, isExternal, children }) => {
    console.log(href);

    return href ? (
      <LinkCommon href={href} isExternal={isExternal}>
        {children}
      </LinkCommon>
    ) : (
      children
    );
  };

  return (
    <div
      className={clsx(
        ' border-0 rounded-[6.25rem] pt-[4rem] md:pt-0',
        'shadow-[0px_0px_10px_rgba(0,0,0,0.2)]',
        bgColor,
        style
      )}
    >
      <BannerDisplay href={href} isExternal={isExternal}>
        <div className="w-full flex flex-wrap justify-center items-center">
          <div className={clsx('w-100 md:w-2/5 mx-auto', bannerPosition)}>
            <ImageCommon
              {...image}
              style={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '-0.25rem',
              }}
            />
          </div>
          <div className={clsx('w-100 md:w-3/5 flex-auto', contentPosition)}>{children}</div>
        </div>
      </BannerDisplay>
    </div>
  );
};

export default BannerWithContent;
