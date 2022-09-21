import { BannerProps } from 'interfaces/banner';
import LinkCommon from '@common/Link';
import ImageCommon from '@common/Image';

const BannerWithContent = ({
  position,
  title,
  url,
  image,
  style,
  background = 'bg-blue',
}: BannerProps) => {
  const pageUrl = (bannerUrl && `/${bannerUrl}`) || '/';

  const backgroundColor = background ? getColorCode(background) : 'var(--buttonPrimaryBg)';

  const Banner = () => (
    <ImageCommon src={image.src} alt={image.alt} width={image.width} height={image.height} />
  );

  return (
    <div className="flex justify-center">
      <div style={{ width: image.width }}>
        {pageUrl ? (
          <LinkCommon href={pageUrl} passHref={false} prefetch={false}>
            <Banner />
          </LinkCommon>
        ) : (
          <Banner />
        )}
      </div>
    </div>
  );
};

export default BannerWithContent;
