output "bucket_name" {
  value = aws_s3_bucket.website.bucket
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.website.domain_name
}

output "certificate_arn" {
  value = aws_acm_certificate.site.arn
}
