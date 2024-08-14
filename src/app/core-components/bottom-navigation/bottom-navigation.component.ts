import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.css'
})
export class BottomNavigationComponent {
  constructor(private sanitizer: DomSanitizer) { }

  getSafeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }


  sidebar: Array<any> = [
    {
      id: "",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_460)">
              <path d="M22 23.0001H15.999C15.7338 23.0001 15.4794 22.8947 15.2919 22.7072C15.1044 22.5196 14.999 22.2653 14.999 22.0001V16.5451C15.0063 16.1469 14.9341 15.7514 14.7868 15.3814C14.6395 15.0115 14.4199 14.6747 14.141 14.3906C13.862 14.1064 13.5292 13.8808 13.162 13.7267C12.7949 13.5727 12.4007 13.4933 12.0025 13.4933C11.6043 13.4933 11.2101 13.5727 10.843 13.7267C10.4758 13.8808 10.143 14.1064 9.86403 14.3906C9.58506 14.6747 9.3655 15.0115 9.21818 15.3814C9.07086 15.7514 8.99873 16.1469 9.006 16.5451V22.0001C9.006 22.2653 8.90064 22.5196 8.71311 22.7072C8.52557 22.8947 8.27122 23.0001 8.006 23.0001H2C1.73478 23.0001 1.48043 22.8947 1.29289 22.7072C1.10536 22.5196 1 22.2653 1 22.0001V11.5431C1.00009 11.4077 1.02761 11.2738 1.08088 11.1493C1.13416 11.0249 1.2121 10.9125 1.31 10.8191L11.31 1.27605C11.4961 1.09899 11.7431 1.00024 12 1.00024C12.2569 1.00024 12.5039 1.09899 12.69 1.27605L22.69 10.8191C22.7879 10.9125 22.8658 11.0249 22.9191 11.1493C22.9724 11.2738 22.9999 11.4077 23 11.5431V22.0001C23 22.2653 22.8946 22.5196 22.7071 22.7072C22.5196 22.8947 22.2652 23.0001 22 23.0001Z" fill="#262626"/>
              </g>
              <defs>
              <clipPath id="clip0_1_460">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
      name: "Home",
      link: "",
    },
    {
      id: "",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_467)">
              <path d="M19 10.5C19 12.1811 18.5015 13.8245 17.5675 15.2223C16.6335 16.6202 15.306 17.7096 13.7528 18.353C12.1996 18.9963 10.4906 19.1647 8.84174 18.8367C7.1929 18.5087 5.67834 17.6992 4.4896 16.5104C3.30085 15.3217 2.4913 13.8071 2.16333 12.1583C1.83535 10.5094 2.00368 8.80036 2.64703 7.24719C3.29037 5.69402 4.37984 4.3665 5.77766 3.43251C7.17547 2.49852 8.81886 2 10.5 2C12.7543 2 14.9164 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5112 16.511L22.0002 22" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1_467">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
      name: "Search",
      link: "/explore",
    },
    {
      id: "",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_510)">
            <path d="M2 12V15.45C2 18.299 2.698 19.455 3.606 20.394C4.546 21.303 5.704 22.002 8.552 22.002H15.448C18.296 22.002 19.454 21.302 20.394 20.394C21.302 19.455 22 18.3 22 15.45V8.552C22 5.703 21.302 4.546 20.394 3.607C19.454 2.7 18.296 2 15.448 2H8.552C5.704 2 4.546 2.699 3.606 3.607C2.698 4.547 2 5.703 2 8.552V12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.54492 12.001H17.4549" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0029 6.54504V17.455" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_510">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>`,
      name: "Create",
      link: "",
    },

    {
      id: "",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_484)">
            <path d="M2.04883 7.00195H21.9498" stroke="#262626" stroke-width="2" stroke-linejoin="round"/>
            <path d="M13.5039 2.00098L16.3619 7.00198" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.20703 2.10999L10.002 7.00199" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12.001V15.45C2 18.299 2.698 19.456 3.606 20.395C4.546 21.303 5.704 22.002 8.552 22.002H15.448C18.296 22.002 19.454 21.303 20.394 20.395C21.302 19.456 22 18.299 22 15.45V8.552C22 5.704 21.302 4.546 20.394 3.607C19.454 2.699 18.296 2 15.448 2H8.552C5.704 2 4.546 2.699 3.606 3.607C2.698 4.546 2 5.704 2 8.552V12.001Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76308 17.664C9.62495 17.5843 9.51027 17.4696 9.43057 17.3314C9.35087 17.1933 9.30897 17.0365 9.30908 16.877V11.63C9.30889 11.4703 9.35078 11.3134 9.43053 11.175C9.51029 11.0367 9.62508 10.9218 9.76337 10.8419C9.90165 10.762 10.0585 10.7199 10.2182 10.72C10.378 10.72 10.5348 10.7621 10.6731 10.842L15.2181 13.466C15.3564 13.5458 15.4713 13.6606 15.5511 13.7988C15.631 13.937 15.6731 14.0939 15.6731 14.2535C15.6731 14.4132 15.631 14.57 15.5511 14.7083C15.4713 14.8465 15.3564 14.9613 15.2181 15.041L10.6731 17.665C10.5347 17.7449 10.3778 17.787 10.2181 17.787C10.0583 17.787 9.90142 17.7449 9.76308 17.665V17.664Z" fill="#262626"/>
            </g>
            <defs>
            <clipPath id="clip0_1_484">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>`,
      name: "Reels",
      link: "",
    },


    {
      id: "",
      icon: `<svg class="w-7 h-7 text-gray-200 dark:text-gray-700" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>`,
      name: "Profile",
      link: "/profile",
    },
  ]
}
