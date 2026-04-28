import Link from 'next/link';

import { ImageBox } from '../../../common/Image/ImageBox';
import { Column, Row } from '../../../common/containers/Flex';
import { Icons } from '../../../common/icons/Icons';
import { Text } from '../../../common/text/Text';

interface SimpleFooterProps {
  id?: string;
  companyName: string;
  companyLogoUrl?: string;
  companyWebsite?: string;
  companyEmail?: string;
  companyPhone?: string;
  companyAddress?: string;
  socialInstagram?: string;
  socialLinkedIn?: string;
  socialTwitter?: string;
  socialWhatsapp?: string;
  year: number;
}

export const SimpleFooter = (props: SimpleFooterProps) => {
  const { id } = props;

  return (
    <footer id={id} className="w-full p-4 px-8 bg-gray-800 text-gray-300 text-sm">
      <Row responsive="md" gap={8} className="md:justify-end">
        <Column flexX="start" className="w-full md:h-32 md:justify-between">
          <Row gap={4} className="text-nowrap mb-4">
            <ImageBox width={30} src={props.companyLogoUrl} alt={props.companyName} />
            <Text size="md">{props.companyName}</Text>
          </Row>
          <Text size="xs" opacity="70" className="text-nowrap">
            &copy; {props.year} {props.companyName}. All rights reserved.
          </Text>
        </Column>

        <Column flexX="start" className="w-full md:max-w-xs">
          <Text bold size="xs" opacity="50">
            Contact
          </Text>

          <Link href={`mailto:${props.companyEmail || '#'}`} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="email" iconSize="1.2rem" />
              <Text>Email</Text>
            </Row>
          </Link>
          <Link href={`tel:${props.companyPhone || '#'}`} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="phone" iconSize="1.2rem" />
              <Text>Phone</Text>
            </Row>
          </Link>
          <Link href={props.socialWhatsapp || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="whatsapp" iconSize="1.2rem" />
              <Text>WhatsApp</Text>
            </Row>
          </Link>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.companyAddress || '')}`}
            className="line-bottom-hover"
          >
            <Row gap={4}>
              <Icons iconType="map" iconSize="1.2rem" />
              <Text>{props.companyAddress}</Text>
            </Row>
          </Link>
        </Column>

        <Column flexX="start" className="w-full md:max-w-60">
          <Text bold size="xs" opacity="50">
            Social Links
          </Text>

          <Link href={props.companyWebsite || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="website" iconSize="1.2rem" />
              <Text>Website</Text>
            </Row>
          </Link>
          <Link href={props.socialInstagram || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="instagram" iconSize="1.2rem" />
              <Text>Instagram</Text>
            </Row>
          </Link>
          <Link href={props.socialLinkedIn || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="linkedin" iconSize="1.2rem" />
              <Text>LinkedIn</Text>
            </Row>
          </Link>
          <Link href={props.socialTwitter || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="twitter" iconSize="1.2rem" />
              <Text>Twitter</Text>
            </Row>
          </Link>
        </Column>

        <Column flexX="start" className="w-full md:max-w-60">
          <Text bold size="xs" opacity="50">
            Terms & Policies
          </Text>

          <Link href={props.companyWebsite || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="link" iconSize="1.2rem" />
              <Text>Website</Text>
            </Row>
          </Link>
          <Link href={props.socialInstagram || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="link" iconSize="1.2rem" />
              <Text>Instagram</Text>
            </Row>
          </Link>
          <Link href={props.socialLinkedIn || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="link" iconSize="1.2rem" />
              <Text>LinkedIn</Text>
            </Row>
          </Link>
          <Link href={props.socialTwitter || '#'} className="line-bottom-hover">
            <Row gap={4}>
              <Icons iconType="link" iconSize="1.2rem" />
              <Text>Twitter</Text>
            </Row>
          </Link>
        </Column>
      </Row>
    </footer>
  );
};

/*
      </Row>
      <Row responsive="md" gap={8}>
        <Row gap={8} className="justify-center md:justify-start">
          <Link href="#" className="line-bottom-hover">
            <Text opacity="70">Privacy policy</Text>
          </Link>
          <Link href="#" className="line-bottom-hover">
            <Text opacity="70">Terms of use</Text>
          </Link>
          <Link href="#" className="line-bottom-hover">
            <Text opacity="70">Security</Text>
          </Link>
        </Row>
        <Text size="xs" opacity="70" className="text-nowrap">
          &copy; {props.year} {props.companyName}. All rights reserved.
        </Text>
*/
