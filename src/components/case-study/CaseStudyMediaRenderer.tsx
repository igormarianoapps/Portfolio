import React from 'react';
import { CaseStudyMedia, CaseStudyMediaItem } from '../../types/portfolio';
import { MediaSingle } from './MediaSingle';
import { MediaPreviewTall } from './MediaPreviewTall';
import { MediaGallery } from './MediaGallery';
import { MediaComparison } from './MediaComparison';
import { MediaResponsivePair } from './MediaResponsivePair';
import { MediaGrid } from './MediaGrid';

interface CaseStudyMediaRendererProps {
  media?: CaseStudyMedia;
  legacyImage?: {
    url: string;
    alt: string;
    caption?: string;
  };
}

export const CaseStudyMediaRenderer: React.FC<CaseStudyMediaRendererProps> = ({
  media,
  legacyImage,
}) => {
  // 1. If explicit media block exists, dispatch based on media.type
  if (media) {
    switch (media.type) {
      case 'single':
        if (media.item) {
          return (
            <MediaSingle
              item={media.item}
              aspectHint={media.aspectHint || 'auto'}
            />
          );
        }
        break;

      case 'preview':
        if (media.item) {
          return (
            <MediaPreviewTall
              item={media.item}
              maxHeight={media.maxPreviewHeight || 520}
            />
          );
        }
        break;

      case 'gallery':
        if (media.items || media.item) {
          return (
            <MediaGallery
              items={media.items || []}
              panoramicItem={media.item}
              caption={media.caption}
            />
          );
        }
        break;

      case 'comparison':
        if (media.before && media.after) {
          return (
            <MediaComparison
              before={media.before}
              after={media.after}
              caption={media.caption}
            />
          );
        }
        break;

      case 'responsive-pair':
        if (media.desktop && media.mobile) {
          return (
            <MediaResponsivePair
              desktop={media.desktop}
              mobile={media.mobile}
              caption={media.caption}
            />
          );
        }
        break;

      case 'grid':
        if (media.items && media.items.length > 0) {
          return (
            <MediaGrid
              items={media.items}
              caption={media.caption}
              columns={media.items.length >= 3 ? 3 : 2}
            />
          );
        }
        break;

      default:
        break;
    }
  }

  // 2. Fallback to legacy single image if provided
  if (legacyImage) {
    const item: CaseStudyMediaItem = {
      url: legacyImage.url,
      alt: legacyImage.alt,
      caption: legacyImage.caption,
    };
    return <MediaSingle item={item} aspectHint="auto" />;
  }

  return null;
};
