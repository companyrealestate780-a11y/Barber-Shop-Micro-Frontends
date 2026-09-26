import { useLanguage } from '../providers/LanguageProvider';
import { Link } from 'react-router-dom';

export function Footer(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="footer-title-ar">حلاقة البلد</span>
            <span className="footer-title-en">Helaqat El Balad</span>
          </h3>
          <p className="footer-subtitle">
            {isArabic
              ? 'حلاق حديث وعصري في قلب الحي'
              : 'Modern and contemporary barber shop in the heart of the neighborhood'}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>{isArabic ? 'روابط سريعة' : 'Quick Links'}</h4>
          <ul>
            <li>
              <Link to="/services">{isArabic ? 'الخدمات' : 'Services'}</Link>
            </li>
            <li>
              <Link to="/booking">{isArabic ? 'الحجز' : 'Booking'}</Link>
            </li>
            <li>
              <Link to="/gallery">{isArabic ? 'الصور' : 'Gallery'}</Link>
            </li>
            <li>
              <Link to="/contact">{isArabic ? 'اتصل بنا' : 'Contact'}</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>{isArabic ? 'اتصل بنا' : 'Contact'}</h4>
          <ul>
            <li>
              <a href="tel:+201001234567">+20 100 123 4567</a>
            </li>
            <li>
              <a href="mailto:info@helaqat.com">info@helaqat.com</a>
            </li>
            <li>{isArabic ? 'القاهرة، مصر' : 'Cairo, Egypt'}</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>{isArabic ? 'قانوني' : 'Legal'}</h4>
          <ul>
            <li>
              <Link to="/privacy">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
            </li>
            <li>
              <Link to="/terms">{isArabic ? 'شروط الاستخدام' : 'Terms of Use'}</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear}{' '}
          {isArabic
            ? 'حلاقة البلد. جميع الحقوق محفوظة'
            : 'Helaqat El Balad. All rights reserved'}
          .
        </p>
      </div>
    </footer>
  );
}
