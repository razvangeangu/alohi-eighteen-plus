export interface Fax {
  /** Free-form comment */
  comment: string;

  /** Fax cost in the user currency */
  cost: number;

  cost_details: any;

  multiplier: number;

  notification_cost: number;

  description: string;

  direction: FaxDirection;

  duration: number;

  /** Fax file ID for the getFile handle */
  file: string;

  /** Human-readable file name */
  file_name: string;

  /** Might be a userId for faxes sent or received with free accounts */
  from: string;

  header?: string;

  /** Fax ID */
  id: string;

  is_read: boolean;

  /** `true` if the fax is marked as spam */
  is_spam: boolean;
  last_update: string;

  /** Maximum number of retries */
  max_retry?: number;

  /** User ID of the fax owner */
  owner_id: string;

  /** Number of pages in the fax */
  pages: number;

  /** Delay between two retries */
  retry_delay?: number;

  scheduled_time?: string;

  /** Time at which faxing session started. Format: YYYY-MM-DD HH:mm:ss */
  start_time: string;

  /** Fax status */
  status: FaxStatus;

  /** Time when the fax was submitted for sending. For outgoing faxes only */
  submit_time?: string;

  /** Fax destination number. Might be a userId for faxes sent or received with free accounts */
  to: string;

  /** Fax cover page */
  cover_page: FaxCoverPage;
}

export type FaxDirection = 'outgoing' | 'incoming';

export type FaxStatus =
  | 'success'
  | 'partially_sent'
  | 'partially_received'
  | 'insufficient_credit'
  | 'failed'
  | 'failed_internal_process_error'
  | 'failed_user_busy'
  | 'failed_no_answer'
  | 'failed_unallocated_number'
  | 'failed_office_converter_issue'
  | 'failed_separate_file_pages_issue'
  | 'failed_render_header_issue'
  | 'failed_invalid_number_format'
  | 'failed_mimetype_not_supported'
  | 'failed_destination_not_supported'
  | 'failed_image_preparation'
  | 'failed_to_send'
  | 'failed_normal_temporary_failure'
  | 'failed_unknown_converter_issue'
  | 'failed_normal_clearing'
  | 'failed_convert_to_tiff_issue'
  | 'failed_fs_49';

export interface FaxCoverPage {
  name_to: string;
  name_from: string;
  subject: string;
  flags: string[];
  message: string;
}
